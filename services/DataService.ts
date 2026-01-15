
import { GALLERY_ITEMS, EXTERNAL_SHEET_URL, FOUNDER_IMAGE } from '../constants';
import { GalleryItem, GalleryCategory } from '../types';

// In a real Azure deployment, this would be your Azure Function URL
// e.g., https://pnreddy-api.azurewebsites.net/api
const AZURE_API_URL = ''; 
const STORAGE_KEY = 'pnreddy_gallery_data';
const FOUNDER_KEY = 'pnreddy_founder_image';
const STAFF_PHOTO_PREFIX = 'pnreddy_staff_';

export const DataService = {
  /**
   * CLOUD SYNC UTILS
   */
  isCloudConnected: (): boolean => {
    return AZURE_API_URL !== '';
  },

  getStorageUsage: (): number => {
    let total = 0;
    for (const x in localStorage) {
      if (localStorage.hasOwnProperty(x)) {
        total += (localStorage[x].length * 2);
      }
    }
    return Math.min(Math.round((total / (10 * 1024 * 1024)) * 100), 100);
  },

  /**
   * LEADERSHIP PHOTO MANAGEMENT
   */
  getStaffPhoto: (roleId: string, defaultUrl: string): string => {
    const specific = localStorage.getItem(`${STAFF_PHOTO_PREFIX}${roleId}`);
    if (specific) return specific;
    if (roleId === 'chairman') {
      return localStorage.getItem(FOUNDER_KEY) || defaultUrl;
    }
    return defaultUrl;
  },

  setStaffPhoto: async (roleId: string, base64Data: string): Promise<boolean> => {
    // If Azure API is present, we would POST to Blob Storage here
    if (DataService.isCloudConnected()) {
      try {
        const response = await fetch(`${AZURE_API_URL}/upload-staff`, {
          method: 'POST',
          body: JSON.stringify({ roleId, image: base64Data })
        });
        return response.ok;
      } catch (e) { return false; }
    }

    // Fallback to local storage
    try {
      localStorage.setItem(`${STAFF_PHOTO_PREFIX}${roleId}`, base64Data);
      if (roleId === 'chairman') localStorage.setItem(FOUNDER_KEY, base64Data);
      return true;
    } catch (e) { return false; }
  },

  resetStaffPhoto: (roleId: string) => {
    localStorage.removeItem(`${STAFF_PHOTO_PREFIX}${roleId}`);
    if (roleId === 'chairman') localStorage.removeItem(FOUNDER_KEY);
  },

  getFounderImage: (): string => {
    return DataService.getStaffPhoto('chairman', FOUNDER_IMAGE);
  },

  /**
   * GALLERY MANAGEMENT (Cosmos DB Ready)
   */
  getGalleryItems: async (): Promise<GalleryItem[]> => {
    // 1. Try to fetch from Azure Cosmos DB if API is configured
    if (DataService.isCloudConnected()) {
      try {
        const response = await fetch(`${AZURE_API_URL}/gallery`);
        if (response.ok) return await response.json();
      } catch (e) { console.error("Cloud fetch failed, falling back..."); }
    }

    // 2. Fallback to Local + Sheet + Constants
    let localItems: GalleryItem[] = [];
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { localItems = JSON.parse(saved); } catch (e) {}
    }

    return [...GALLERY_ITEMS, ...localItems];
  },

  addItems: async (newItems: Omit<GalleryItem, 'id'>[]): Promise<boolean> => {
    // 1. Try to save to Azure
    if (DataService.isCloudConnected()) {
      try {
        const response = await fetch(`${AZURE_API_URL}/gallery`, {
          method: 'POST',
          body: JSON.stringify(newItems)
        });
        return response.ok;
      } catch (e) { return false; }
    }

    // 2. Fallback to Local Storage
    const saved = localStorage.getItem(STORAGE_KEY);
    let userItems = saved ? JSON.parse(saved) : [];
    const itemsWithIds = newItems.map(item => ({
      ...item,
      id: `custom_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }));
    const updated = [...userItems, ...itemsWithIds];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return true;
    } catch (e) { return false; }
  },

  deleteItem: async (id: string): Promise<void> => {
    if (DataService.isCloudConnected()) {
      await fetch(`${AZURE_API_URL}/gallery/${id}`, { method: 'DELETE' });
    }
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    const userItems = JSON.parse(saved);
    const updated = userItems.filter((item: GalleryItem) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  },

  deleteCategory: async (categoryName: string): Promise<void> => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    const userItems = JSON.parse(saved);
    const updated = userItems.filter((item: GalleryItem) => item.category !== categoryName);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
};

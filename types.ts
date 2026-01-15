
// Fix: Added React import to provide the 'React' namespace for React.ReactNode
import React from 'react';

export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export type GalleryCategory = 'All' | 'Campus' | 'Classrooms' | 'Labs' | 'Events' | 'Sports' | 'Cultural';

export interface GalleryItem {
  id: string;
  type: 'image' | 'video' | 'youtube';
  url: string; // Image URL, Video URL, or YouTube Embed ID
  thumbnail: string;
  title: string;
  category: GalleryCategory;
  year: string;
  caption?: string;
}

export interface NavLink {
  name: string;
  path: string;
}

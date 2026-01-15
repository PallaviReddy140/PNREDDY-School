
# PNREDDY Techno School - Official Website

A modern, high-performance school website built with **React + Vite**. Featuring a "Headless CMS" that allows school staff to update the gallery using only Google Sheets and Google Drive.

---

## 🚀 Quick Start (Technical Setup)

Ensure you have [Node.js](https://nodejs.org/) installed on your computer.

1. **Extract the project** into a folder.
2. **Open your terminal** (CMD or PowerShell) inside that folder.
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
5. **View the site**: Open your browser and go to `http://localhost:5173`.

---

## 📸 Content Management (Staff Instructions)

The school gallery is powered by a **Google Sheet**. Staff members can add photos or videos without touching any code.

### Step 1: Prepare your Google Drive
1. Create a folder in Google Drive named **"School Gallery"**.
2. **Crucial:** Right-click the folder > **Share** > Change General Access to **"Anyone with the link"**.
3. Upload your school photos into this folder.

### Step 2: Setup the Google Sheet
1. Create a new Google Sheet.
2. Set the following **Headers** in the first row:
   `type`, `category`, `year`, `title`, `caption`, `thumbnail`, `url`
3. Fill in the rows:
   - **type**: Put `image`, `youtube`, or `video`.
   - **url**: For photos, right-click the file in Drive, click "Get Link," and paste it here.
   - **thumbnail**: For photos, paste the same link as the URL.
4. Go to **File > Share > Publish to Web**.
5. Select **"Comma-separated values (.csv)"** and click **Publish**.
6. Copy the generated URL.

### Step 3: Connect to Website
1. Open `src/constants.tsx`.
2. Find `EXTERNAL_SHEET_URL` and paste your Google Sheet CSV link there.
3. The website will now automatically fetch and display the new photos!

---

## 🌐 Website Overview & Architecture

### 1. Key Pages
- **Home**: Dynamic hero section with a photo carousel, Chairman's message, and academic highlights.
- **About Us**: Detailed school history since 2001, including a visual roadmap/timeline of milestones.
- **Academics**: Breakdown of the SSC curriculum, "Techno" teaching methodology, and evaluation strategies.
- **Staff**: Professional profiles of the leadership and faculty departments.
- **Facilities**: Grid layout of labs, library, and classrooms with modern iconography.
- **Gallery**: Smart filter system (By Year/Category) with a built-in Lightbox for viewing photos and YouTube videos.
- **Contact**: Functional lead-generation form (UI only) and embedded Google Map.

### 2. Built-in "Staff Dashboard"
- Located at `/admin`.
- **Access Code**: `pnreddy2024` (Can be changed in `Admin.tsx`).
- Allows staff to quickly add one-off items to the gallery which are saved to the browser's local storage.

### 3. Design Aesthetics
- **Colors**: Saffron and Maroon (Telangana cultural palette) mixed with clean White space.
- **Typography**: "Plus Jakarta Sans" for a modern, corporate yet friendly feel.
- **Responsiveness**: Fully optimized for parents viewing on mobile devices.

---

## 🛠 Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite (Lightning fast development)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router 7

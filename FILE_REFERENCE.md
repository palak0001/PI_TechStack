# 📚 File Reference Guide

Quick reference to all important files and where to find them.

## 🚀 START HERE

**First Time Setup**
- [QUICK_START.md](../QUICK_START.md) - 5 minute setup

**Detailed Instructions**
- [SETUP_GUIDE.md](../SETUP_GUIDE.md) - Complete setup with troubleshooting

---

## 📖 Documentation Files

Located in project root:

| File | Purpose | Read Time |
|------|---------|-----------|
| [README.md](../README.md) | Full project overview | 10 min |
| [QUICK_START.md](../QUICK_START.md) | Fast setup guide | 5 min |
| [SETUP_GUIDE.md](../SETUP_GUIDE.md) | Detailed instructions | 20 min |
| [PROJECT_SUMMARY.md](../PROJECT_SUMMARY.md) | File structure overview | 10 min |
| [REQUIREMENTS_CHECKLIST.md](../REQUIREMENTS_CHECKLIST.md) | Verification checklist | 10 min |
| [INDEX.md](../INDEX.md) | Navigation guide | 5 min |
| [COMPLETION_SUMMARY.md](../COMPLETION_SUMMARY.md) | Project completion report | 10 min |

---

## 🎨 Frontend Files

### Pages (in `frontend/src/pages/`)

| File | Contains | Key Features |
|------|----------|--------------|
| Home.jsx | Homepage | Hero, services preview, projects, testimonials |
| About.jsx | About page | Mission, vision, values, process |
| Services.jsx | Services page | 3 clickable services with modals |
| Projects.jsx | Portfolio page | Grid with category filtering |
| Testimonials.jsx | Testimonials page | Carousel + full grid |
| Contact.jsx | Contact page | Form with backend integration |

### Components (in `frontend/src/components/`)

| File | Contains | Exports |
|------|----------|---------|
| Common.jsx | Reusable UI | Button, Card, Modal, Badge |
| Navbar.jsx | Navigation | Navbar with mobile menu |
| Footer.jsx | Footer | Footer with links & social |

### Config Files (in `frontend/`)

| File | Purpose |
|------|---------|
| vite.config.js | Vite configuration |
| tailwind.config.js | Colors and Tailwind config |
| postcss.config.js | PostCSS plugins |
| package.json | Dependencies |
| index.html | HTML template |

### Entry Point (in `frontend/src/`)

| File | Purpose |
|------|---------|
| App.jsx | Main app with routing |
| main.jsx | React entry point |
| index.css | Global styles |
| data/content.js | All demo data **[EDIT THIS]** |

---

## 🔧 Backend Files

### Server (in `backend/src/`)

| File | Purpose |
|------|---------|
| server.js | Main Express server |

### Config (in `backend/src/config/`)

| File | Purpose |
|------|---------|
| db.js | MongoDB connection |

### Database (in `backend/src/models/`)

| File | Purpose |
|------|---------|
| Contact.js | Contact schema |

### Routes (in `backend/src/routes/`)

| File | Purpose |
|------|---------|
| index.js | Route definitions |
| contacts.js | Contact submission logic |

### Validation (in `backend/src/middleware/`)

| File | Purpose |
|------|---------|
| validation.js | Form validation |

### Config (in `backend/`)

| File | Purpose |
|------|---------|
| .env | Environment variables **[EDIT THIS]** |
| package.json | Dependencies |

---

## 🎯 Files to Edit for Customization

### #1 Content Edit
**File**: `frontend/src/data/content.js`
**What to change**: Services, projects, testimonials

```javascript
export const servicesData = [ /* Edit here */ ]
export const projectsData = [ /* Edit here */ ]
export const testimonialsData = [ /* Edit here */ ]
```

### #2 Colors Edit
**File**: `frontend/tailwind.config.js`
**What to change**: Blue, beige, and other colors

```javascript
colors: {
  primary: { /* Change blues here */ },
  beige: { /* Change accent colors here */ }
}
```

### #3 Company Info Edit
**File**: `frontend/src/components/Footer.jsx`
**What to change**: Company name, email, phone, address

### #4 Contact Info Edit
**File**: `frontend/src/pages/Contact.jsx`
**What to change**: Phone number, email, address

### #5 Database Config
**File**: `backend/.env`
**What to change**: MongoDB URL

```
MONGODB_URI=your_mongodb_connection_string
```

---

## 🗂 File Organization

### By Purpose

**Navigation & Routing**
- App.jsx - Main routing
- Navbar.jsx - Navigation component
- index.js (routes) - API routes

**Pages**
- Home.jsx
- About.jsx
- Services.jsx
- Projects.jsx
- Testimonials.jsx
- Contact.jsx

**Components**
- Common.jsx (Button, Card, Modal, Badge)
- Navbar.jsx
- Footer.jsx

**Data**
- content.js (demo data)
- Contact.js (database schema)

**Configuration**
- vite.config.js
- tailwind.config.js
- postcss.config.js
- .env

---

## 📊 File Sizes (Approximate)

| Category | Files | Size |
|----------|-------|------|
| Pages | 6 | ~300 KB |
| Components | 3 | ~50 KB |
| Config | 5 | ~30 KB |
| Backend | 7 | ~40 KB |
| Data | 1 | ~20 KB |
| Documentation | 7 | ~100 KB |

---

## 🔍 Search Guide

### Find content to edit
→ `frontend/src/data/content.js`

### Find color configuration
→ `frontend/tailwind.config.js`

### Find company information
→ `frontend/src/components/Footer.jsx`
→ `frontend/src/pages/Contact.jsx`

### Find database configuration
→ `backend/.env`

### Find API endpoints
→ `backend/src/routes/contacts.js`

### Find database schema
→ `backend/src/models/Contact.js`

### Find form validation
→ `backend/src/middleware/validation.js`

### Find CSS styling
→ `frontend/src/index.css`
→ `frontend/tailwind.config.js`

---

## 📋 Common Tasks

### Task: Change Services
**Edit**: `frontend/src/data/content.js` → `servicesData`

### Task: Change Projects
**Edit**: `frontend/src/data/content.js` → `projectsData`

### Task: Change Colors
**Edit**: `frontend/tailwind.config.js` → `colors`

### Task: Change Company Name
**Edit**: 
- `frontend/src/components/Navbar.jsx`
- `frontend/src/components/Footer.jsx`

### Task: Change Contact Info
**Edit**: `frontend/src/pages/Contact.jsx`

### Task: Change Database URL
**Edit**: `backend/.env`

---

## 🚀 Running & Testing

### Start Frontend
```bash
cd frontend
npm run dev
```
Visit: http://localhost:5173

### Start Backend
```bash
cd backend
npm run dev
```
Server: http://localhost:5000

### Build for Production
```bash
cd frontend
npm run build
```
Output: `dist/` folder

---

## 🔗 File Dependencies

```
App.jsx
├── Navbar.jsx
├── pages/Home.jsx
├── pages/About.jsx
├── pages/Services.jsx
├── pages/Projects.jsx
├── pages/Testimonials.jsx
├── pages/Contact.jsx
│   └── axios → /api/contact
└── Footer.jsx
```

---

## 📞 Quick File Lookup

**Need to...** | **Edit this file** | **Location**
---|---|---
Change services | content.js | `frontend/src/data/`
Change projects | content.js | `frontend/src/data/`
Change testimonials | content.js | `frontend/src/data/`
Change colors | tailwind.config.js | `frontend/`
Change company name | Navbar.jsx, Footer.jsx | `frontend/src/components/`
Change contact email | Contact.jsx | `frontend/src/pages/`
Change MongoDB URL | .env | `backend/`
Add API endpoint | routes/contacts.js | `backend/src/routes/`
Add database field | Contact.js | `backend/src/models/`

---

## ✅ File Status

All files are:
- ✅ Created
- ✅ Complete
- ✅ Functional
- ✅ Well-structured
- ✅ Ready to use
- ✅ Ready to customize
- ✅ Ready to deploy

---

## 💡 Pro Tips

1. **Start with content.js** - This is where all demo data lives
2. **Use Ctrl+F** - To find strings across files
3. **Keep folder structure** - Makes files easier to maintain
4. **Follow naming convention** - Makes code more readable
5. **Edit one thing at a time** - Makes debugging easier

---

**All files are organized, documented, and ready for use!**

Last Updated: December 23, 2025

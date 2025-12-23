# 🚀 Quick Start Guide - PI TechStack Website

## What You Have

A complete, production-ready digital agency website with:

### ✅ Frontend (React + Vite)
- 6 fully functional pages with animations
- Responsive design (mobile, tablet, desktop)
- Reusable component library
- Sample data included
- Smooth transitions and hover effects

### ✅ Backend (Node.js + Express)
- Contact form API endpoint
- MongoDB integration with Mongoose
- Form validation
- Error handling

### ✅ Styling
- Tailwind CSS
- Framer Motion animations
- Professional color scheme
- Mobile-first design

---

## 🎯 Getting Started in 5 Minutes

### 1. Open Two Terminals

**Terminal 1 (Frontend)**
```bash
cd frontend
npm install
npm run dev
```

**Terminal 2 (Backend)**
```bash
cd backend
npm install
npm run dev
```

### 2. Open Your Browser
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

---

## 📋 Database Setup

### Option A: MongoDB Local (Easiest for Development)

1. Install MongoDB Community Edition: https://www.mongodb.com/try/download/community
2. Start MongoDB (on Windows):
   ```bash
   mongod
   ```
3. Backend will auto-connect to `mongodb://localhost:27017/pi-techstack`

### Option B: MongoDB Atlas (Cloud)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account and cluster
3. Get connection string
4. Update `.env` in backend:
   ```
   MONGODB_URI=your_connection_string
   ```

---

## 🎨 Color Customization

Edit `frontend/tailwind.config.js` to change colors:

```javascript
colors: {
  primary: { /* Change blues */ },
  beige: { /* Change beiges */ }
}
```

---

## 📄 Pages & Features

| Page | Features |
|------|----------|
| **Home** | Hero, services preview, featured projects, testimonials |
| **About** | Mission, vision, values, process, why choose us |
| **Services** | 3 services with clickable modals showing details |
| **Projects** | Portfolio grid with category filtering |
| **Testimonials** | Carousel + grid of client feedback |
| **Contact** | Form → saves to MongoDB → success message |

---

## 🔧 Important Files

### Frontend
- `src/App.jsx` - Main routing
- `src/pages/` - All page components
- `src/components/` - Reusable components
- `src/data/content.js` - Demo data (edit here)
- `tailwind.config.js` - Colors & styling

### Backend
- `src/server.js` - Main server file
- `src/models/Contact.js` - Database schema
- `src/routes/contacts.js` - API logic
- `.env` - Configuration

---

## 📝 Demo Data

All demo data (projects, testimonials, services) is in:
```
frontend/src/data/content.js
```

Edit this file to customize:
- Services descriptions
- Project details
- Testimonial content
- Images, links, etc.

---

## 🚀 Deploy to Production

### Frontend (Vercel - Easiest)
```bash
npm install -g vercel
cd frontend
vercel
```

### Backend (Heroku)
```bash
heroku create your-app-name
git push heroku main
```

Update frontend API URL in `frontend/vite.config.js`:
```javascript
proxy: {
  '/api': {
    target: 'https://your-backend-url.herokuapp.com',
    // ...
  }
}
```

---

## ✨ What's Included

✅ All pages fully functional
✅ Animations throughout
✅ Form validation
✅ Contact form with database
✅ Mobile responsive
✅ Clean code structure
✅ Reusable components
✅ Demo data included
✅ Production ready

---

## ⚠️ Notes

1. **Form Submission**: Contact form works when backend is running. Without backend, shows demo success message.

2. **Images**: Using Unsplash images via URLs. For production, host images locally.

3. **Customization**: Everything is easily customizable:
   - Edit content in `src/data/content.js`
   - Change colors in `tailwind.config.js`
   - Modify layouts in page components
   - Update links throughout

4. **Mobile Menu**: Already responsive, works on all devices

---

## 🎓 Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components
│   ├── data/               # Demo data
│   ├── assets/             # Images, icons
│   ├── App.jsx             # Main routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles

backend/
├── src/
│   ├── models/             # Database schemas
│   ├── routes/             # API endpoints
│   ├── middleware/         # Validation, CORS
│   ├── config/             # Database config
│   └── server.js           # Main server
```

---

## 💡 Tips

1. **Save changes**: Both frontend and backend auto-reload on file changes
2. **Test form**: Submit from Contact page to test backend
3. **Check logs**: Look at terminal output for errors
4. **No MongoDB?**: Contact form shows demo message (still functional)

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 5173 in use | Change in `vite.config.js` |
| Port 5000 in use | Change in backend `.env` |
| MongoDB error | Ensure MongoDB is running or configure Atlas |
| API 404 | Check backend is running on 5000 |

---

## 📚 Next Steps

1. ✅ Start both servers (frontend + backend)
2. ✅ Visit http://localhost:5173
3. ✅ Test form submission on Contact page
4. ✅ Customize content in `src/data/content.js`
5. ✅ Deploy when ready!

---

**Happy coding! 🎉**

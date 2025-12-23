# PI TechStack Website - Complete Setup Guide

## 🎉 Project Overview

You now have a **complete, production-ready digital agency website** with:

### Frontend
- ✅ React 18 with Vite for fast development
- ✅ 6 fully functional pages with routing
- ✅ Framer Motion animations throughout
- ✅ Tailwind CSS responsive design
- ✅ Reusable component library
- ✅ Mobile-first approach

### Backend
- ✅ Node.js + Express API server
- ✅ MongoDB with Mongoose ODM
- ✅ Contact form with validation
- ✅ Error handling & CORS support

---

## 📦 Installation Steps

### Step 1: Install Node.js
If not already installed: https://nodejs.org (v16 or higher)

### Step 2: Install MongoDB

#### Option A: Local MongoDB (Recommended for Development)
- Download: https://www.mongodb.com/try/download/community
- Install and start MongoDB service
- Verify: `mongod --version`

#### Option B: MongoDB Atlas (Cloud - No Installation)
- Go to: https://www.mongodb.com/cloud/atlas
- Create free account
- Create a cluster
- Get connection string
- Update `backend/.env` with your connection string

### Step 3: Install Frontend Dependencies

```bash
cd frontend
npm install
```

This installs:
- React & React Router
- Framer Motion
- Tailwind CSS
- Vite & dev tools
- Axios for API calls

### Step 4: Install Backend Dependencies

```bash
cd backend
npm install
```

This installs:
- Express.js
- MongoDB & Mongoose
- CORS support
- Form validation
- Nodemon for auto-reload

---

## ▶️ Running the Project

### Open Two Terminals

**Terminal 1: Frontend**
```bash
cd frontend
npm run dev
```
Output: "Local: http://localhost:5173"

**Terminal 2: Backend**
```bash
cd backend
npm run dev
```
Output: "Server running on port 5000"

### Open in Browser
- Visit: **http://localhost:5173**

---

## 🧪 Testing the Website

### Test Each Page:
1. **Home** - Hero, services, projects, testimonials
2. **About** - Mission, vision, values, process
3. **Services** - Click cards to open modals with details
4. **Projects** - Use filter buttons to sort projects
5. **Testimonials** - Click carousel buttons to navigate
6. **Contact** - Submit form to test backend

### Test Form Submission:
1. Go to Contact page
2. Fill in form with:
   - Name: "John Doe"
   - Email: "john@example.com"
   - Message: "Test message"
3. Click "Send Message"
4. See success message
5. Check MongoDB (data is saved)

---

## 🗂 Project Structure Explained

### Frontend Organization

```
frontend/
├── src/
│   ├── components/
│   │   ├── Common.jsx        # Button, Card, Modal, Badge
│   │   ├── Navbar.jsx         # Navigation bar
│   │   └── Footer.jsx         # Footer
│   ├── pages/
│   │   ├── Home.jsx           # Homepage
│   │   ├── About.jsx          # About page
│   │   ├── Services.jsx       # Services with modals
│   │   ├── Projects.jsx       # Projects with filter
│   │   ├── Testimonials.jsx   # Testimonials carousel
│   │   └── Contact.jsx        # Contact form
│   ├── data/
│   │   └── content.js         # All demo data here
│   ├── assets/
│   ├── App.jsx                # Main app with routing
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

### Backend Organization

```
backend/
├── src/
│   ├── models/
│   │   └── Contact.js         # Database schema
│   ├── routes/
│   │   ├── index.js           # Route definitions
│   │   └── contacts.js        # Form submission logic
│   ├── middleware/
│   │   └── validation.js      # Form validation
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   └── server.js              # Main server file
├── .env                       # Environment config
└── package.json
```

---

## 🎨 Customization Guide

### Change Color Scheme

Edit `frontend/tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Change these for blue colors
  },
  beige: {
    // Change these for accent colors
  }
}
```

### Update Demo Content

Edit `frontend/src/data/content.js`:

```javascript
export const servicesData = [
  {
    id: 1,
    name: 'Your Service',
    description: 'Your description',
    // ... more fields
  }
]
```

### Change Company Info

In multiple files:
- `src/components/Navbar.jsx` - Navigation
- `src/components/Footer.jsx` - Footer info
- `src/pages/Contact.jsx` - Contact details

---

## 🔑 Important Configuration Files

### Frontend Configuration

**vite.config.js** - Vite settings
```javascript
server: {
  port: 5173,
  proxy: {
    '/api': {
      target: 'http://localhost:5000'  // Backend URL
    }
  }
}
```

**tailwind.config.js** - Tailwind CSS
```javascript
colors: {
  // Define your colors here
}
```

### Backend Configuration

**.env** - Environment variables
```
MONGODB_URI=mongodb://localhost:27017/pi-techstack
PORT=5000
NODE_ENV=development
```

---

## 🚀 API Reference

### Contact Submission Endpoint

**POST** `/api/contact`

Request:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 123-4567",
  "message": "Hello, I'm interested in your services."
}
```

Response (Success):
```json
{
  "success": true,
  "message": "Your message has been sent successfully...",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

Response (Error):
```json
{
  "success": false,
  "message": "Error message"
}
```

### Get All Contacts

**GET** `/api/contacts`

Response:
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "message": "Test message",
      "status": "new",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

---

## 🌐 Features Breakdown

### Animations
- Page loads fade in
- Cards animate on scroll
- Hover effects on buttons
- Modal slide-in animations
- Carousel auto-rotate

### Responsive Design
- Mobile: < 640px (single column)
- Tablet: 640px - 1024px (two columns)
- Desktop: > 1024px (three columns)

### Form Validation
- Frontend: HTML5 validation
- Backend: Express-validator
- Error messages shown to user

### Database
- All form submissions saved
- Timestamps recorded
- Status tracking (new/read/replied)

---

## 🔒 Security Features

✅ CORS enabled (backend security)
✅ Input validation (frontend + backend)
✅ Environment variables for sensitive data
✅ Error handling without exposing internals
✅ No hardcoded passwords

---

## 🚢 Deployment Guide

### Deploy Frontend (Vercel)

1. Push code to GitHub
2. Install Vercel CLI: `npm i -g vercel`
3. Deploy: `vercel`
4. Update API URL if backend is deployed elsewhere

### Deploy Backend (Heroku)

1. Create Heroku account: https://heroku.com
2. Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
3. Deploy:
   ```bash
   heroku create your-app-name
   git push heroku main
   ```
4. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_url
   ```

### Update API Connection

In `frontend/vite.config.js`:
```javascript
proxy: {
  '/api': {
    target: 'https://your-deployed-backend.herokuapp.com'
  }
}
```

---

## 🆘 Troubleshooting

### Frontend not loading

**Problem**: Page shows blank or errors
**Solution**:
1. Check terminal for errors
2. Verify `npm run dev` is running
3. Clear browser cache: Ctrl+Shift+Delete
4. Restart development server

### Contact form not submitting

**Problem**: Form submission fails
**Solution**:
1. Verify backend is running on port 5000
2. Check browser console for errors (F12)
3. Ensure MongoDB is running (if installed locally)
4. Check `.env` file has correct MongoDB URL

### MongoDB connection error

**Problem**: "Cannot connect to MongoDB"
**Solution**:
1. If local: Start MongoDB with `mongod`
2. If Atlas: Copy correct connection string
3. Verify internet connection for Atlas
4. Check credentials in `.env`

### Port already in use

**Problem**: "Port 5173 already in use" or similar
**Solution**:
```bash
# Find process using port
Windows: netstat -ano | findstr :5173
Mac/Linux: lsof -i :5173

# Kill process (Windows)
taskkill /PID <PID> /F
```

Or change port in config files.

### Images not loading

**Problem**: All images show broken icon
**Solution**:
1. Check internet connection (using external URLs)
2. Verify image URLs in `src/data/content.js`
3. For production, host images locally in `/public` folder

---

## 📊 Monitoring & Debugging

### Frontend Debugging
- Open DevTools: F12 or Right-click → Inspect
- Check Console tab for errors
- Use Network tab to see API calls
- React DevTools extension helpful

### Backend Debugging
- Look at terminal output for logs
- Check `/api/health` endpoint:
  ```
  GET http://localhost:5000/api/health
  ```
  Should return: `{ "status": "OK" }`
- Use MongoDB Compass to view database

---

## 📋 Development Checklist

- [ ] Both servers running (frontend + backend)
- [ ] Website loads at http://localhost:5173
- [ ] All pages accessible via navigation
- [ ] Services modal opens and closes smoothly
- [ ] Projects filter works correctly
- [ ] Testimonials carousel auto-rotates
- [ ] Contact form submits successfully
- [ ] Form data appears in MongoDB
- [ ] Mobile layout looks good
- [ ] No console errors

---

## 🎓 Learning Resources

- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- Express.js: https://expressjs.com
- MongoDB: https://docs.mongodb.com

---

## 📞 Support & Next Steps

1. **Customize Content**: Edit `src/data/content.js`
2. **Change Colors**: Update `tailwind.config.js`
3. **Update Contact Info**: Edit `src/components/Footer.jsx`
4. **Add Real Images**: Replace image URLs with your own
5. **Deploy**: Follow deployment guide above

---

## ✅ What You Have

✅ Professional website with 6 pages
✅ Fully functional contact form
✅ MongoDB database integration
✅ Responsive mobile design
✅ Smooth animations throughout
✅ Production-ready code
✅ Easy to customize
✅ Ready to deploy

---

**You're all set! Start the servers and visit your website. Happy coding! 🚀**

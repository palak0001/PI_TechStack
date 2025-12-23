# Backend & Frontend Connection Guide

## Overview
This guide explains how to properly run and connect the frontend, backend, and database together.

## Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (running locally or a MongoDB Atlas connection string)

## Database Setup

### Option 1: Local MongoDB
1. Install MongoDB Community Edition from https://www.mongodb.com/try/download/community
2. Start MongoDB service:
   - **Windows**: MongoDB should start automatically, or run `mongod` in PowerShell
   - **Mac**: `brew services start mongodb-community`
   - **Linux**: `sudo systemctl start mongod`

### Option 2: MongoDB Atlas (Cloud)
1. Create a free account at https://www.mongodb.com/cloud/atlas
2. Create a cluster and get your connection string
3. Update `backend/.env` with your connection string:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pi-techstack?retryWrites=true&w=majority
   ```

## Backend Setup & Running

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment
The `.env` file is already configured for local development:
```
MONGODB_URI=mongodb://localhost:27017/pi-techstack
PORT=5000
NODE_ENV=development
```

Update this if using MongoDB Atlas or different settings.

### 3. Start Backend Server
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The backend will run on `http://localhost:5000`

### 4. Verify Backend
Visit `http://localhost:5000/api/health` in your browser. You should see:
```json
{"status":"OK","message":"Server is running"}
```

## Frontend Setup & Running

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Start Frontend Development Server
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

### 3. Verify Frontend
Open `http://localhost:5173` in your browser. You should see the website.

## API Connection Architecture

### During Development (with Vite)
The Vite development server has a proxy configured (`vite.config.js`):
- Frontend requests to `/api/*` are automatically proxied to `http://localhost:5000/api/*`
- This allows the frontend to call API endpoints without CORS issues
- Example: Frontend calls `/api/contact` → Backend receives it as `/api/contact`

### Production Build
For production, update the API base URL in `frontend/src/config/api.js`:
```javascript
const API_BASE_URL = 'https://your-backend-domain.com/api';
```

## API Endpoints

### Contact Form Submission
**POST** `/api/contact`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "Hello, I'm interested in your services..."
}
```

**Response (Success)**:
```json
{
  "success": true,
  "message": "Your message has been sent successfully. We will get back to you soon!",
  "data": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Get All Contacts (Admin)
**GET** `/api/contacts`

## Running Everything Together

### Step 1: Start MongoDB
Ensure MongoDB is running on your system.

### Step 2: Start Backend
```bash
cd backend
npm run dev
```
Wait for: `Server running on port 5000`

### Step 3: Start Frontend (in a new terminal)
```bash
cd frontend
npm run dev
```
Wait for: `Local: http://localhost:5173`

### Step 4: Test Connection
1. Open `http://localhost:5173` in your browser
2. Navigate to the Contact page
3. Fill in the form and submit
4. You should see a success message
5. The contact data should be saved to MongoDB

## Troubleshooting

### "Connection refused" or "ECONNREFUSED"
- Ensure MongoDB is running
- Ensure backend is running on port 5000
- Check `.env` file for correct MONGODB_URI

### CORS Errors
- Backend has CORS enabled in `server.js`
- Vite proxy is configured in `vite.config.js`
- These should handle local development

### 404 Errors on API Calls
- Check backend routes in `backend/src/routes/index.js`
- Verify backend server is running (`http://localhost:5000/api/health`)
- Check Vite proxy configuration

### Form Not Submitting
1. Open browser DevTools (F12)
2. Check Network tab for failed requests
3. Check Console tab for error messages
4. Verify backend is running

## File Structure Reference

```
backend/
├── .env                 # Environment variables
├── package.json         # Dependencies
└── src/
    ├── server.js        # Main Express app
    ├── config/
    │   └── db.js        # MongoDB connection
    ├── models/
    │   └── Contact.js   # Contact schema
    ├── routes/
    │   ├── index.js     # Route definitions
    │   └── contacts.js  # Contact handlers
    └── middleware/
        └── validation.js # Input validation

frontend/
├── vite.config.js       # Vite configuration (includes API proxy)
├── package.json         # Dependencies
└── src/
    ├── config/
    │   └── api.js       # API endpoints configuration
    └── pages/
        └── Contact.jsx  # Contact form component
```

## Next Steps
- Monitor MongoDB for stored contacts
- Set up environment variables for different deployment stages
- Configure proper domain names for production
- Add authentication if needed

# 🚀 Quick Start Guide

## Start in 5 Minutes!

### Step 1: Install Node Modules
```bash
cd portfolio-website
npm install
```

### Step 2: Configure Environment
1. Open `.env` file
2. Update MongoDB URI (use local MongoDB or MongoDB Atlas)
3. Update email credentials (optional for development)

### Step 3: Start MongoDB
```bash
# If using local MongoDB
mongod

# If using MongoDB Atlas, skip this step (connection via URI)
```

### Step 4: Run the Application
```bash
# Development
npm run dev

# Production
npm start
```

### Step 5: Open in Browser
Visit: **http://localhost:3000**

---

## 📱 Features to Try

1. **Navigation** - Click menu items to navigate sections
2. **Mobile Menu** - Resize to mobile and click hamburger menu
3. **Contact Form** - Fill and submit contact form
4. **Smooth Scrolling** - Click buttons to scroll smoothly
5. **Animations** - Hover over cards to see animations
6. **Responsive** - Resize window to see responsive design

---

## 🔧 Useful Commands

```bash
# Install dependencies
npm install

# Run development server with auto-reload
npm run dev

# Run production server
npm start

# Check if server is running
curl http://localhost:3000/health
```

---

## 📡 API Endpoints to Test

Test with curl or Postman:

```bash
# Health check
curl http://localhost:3000/health

# Get portfolio info
curl http://localhost:3000/api/portfolio

# Get all projects
curl http://localhost:3000/api/projects

# Get services
curl http://localhost:3000/api/services

# Submit contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Great portfolio!",
    "message": "I loved your work!"
  }'
```

---

## 🎨 Customize Your Portfolio

Edit these files to personalize:

1. **Content** - Edit `index.html` for your information
2. **Styling** - Edit `style.css` for colors and fonts
3. **Backend** - Update `server.js` with your API

---

## ✅ Checklist

- [ ] MongoDB installed or have Atlas URI
- [ ] Node.js installed (v14+)
- [ ] npm installed
- [ ] `.env` file configured
- [ ] Dependencies installed (`npm install`)
- [ ] Server running (`npm start`)
- [ ] Frontend accessible (http://localhost:3000)

---

## 🆘 Common Issues

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Change PORT in `.env` |
| MongoDB connection error | Check MONGODB_URI in `.env` |
| Email not sending | Verify EMAIL credentials |
| CORS error | Add your domain to CORS_ORIGIN |

---

## 📚 Next Steps

After setup:
1. Customize the content with your information
2. Add your projects and images
3. Configure email for notifications
4. Deploy to your hosting provider
5. Set up custom domain

---

## 🌐 Deployment Guide

### Heroku
1. Create Heroku account
2. Install Heroku CLI
3. `heroku create your-app-name`
4. Set environment variables
5. `git push heroku main`

### AWS/GCP/Azure
Refer to their specific deployment guides in the main README.

---

**Questions?** Check the main README.md for detailed documentation!

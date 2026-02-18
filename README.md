# Kelvin Njagi - Professional Portfolio Website

A modern, fully responsive portfolio website with an Express.js backend, featuring advanced functionality, beautiful UI/UX design, and mobile-first responsiveness.

## 🚀 Features

### Frontend
- **Modern Responsive Design** - Works seamlessly on phones, tablets, and desktops
- **Smooth Animations** - CSS animations and transitions for enhanced user experience
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Section Navigation** - Smooth scrolling between different portfolio sections
- **Project Showcase** - Display and filter portfolio projects
- **Contact Form** - User-friendly contact form with validation
- **Optimized Performance** - Fast loading times and smooth interactions
- **Professional UI** - Modern color scheme and typography

### Backend
- **Express.js Server** - Robust Node.js backend
- **MongoDB Integration** - Database support for contacts and projects
- **RESTful API** - Clean API architecture
- **Email Notifications** - Automated email alerts for new contacts
- **Form Validation** - Server-side validation for data integrity
- **Error Handling** - Comprehensive error management
- **Security Middleware** - Helmet, CORS, and compression
- **Environmental Configuration** - Environment variable support

## 📋 Project Structure

```
portfolio-website/
├── index.html                 # Main HTML file
├── style.css                  # Global styles
├── script.js                  # Frontend JavaScript
├── server.js                  # Main Express server
├── package.json              # Node dependencies
├── .env                       # Environment configuration
├── .gitignore               # Git ignore rules
├── models/
│   ├── ContactMessage.js    # Contact message schema
│   └── Project.js           # Project schema
├── controllers/
│   ├── contactController.js # Contact form logic
│   └── projectController.js # Project management logic
├── routes/
│   ├── contactRoutes.js     # Contact endpoints
│   └── projectRoutes.js     # Project endpoints
├── utils/
│   ├── emailService.js      # Email functionality
│   └── database.js          # Database connection
└── images/                  # Project images
```

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3 (with CSS Grid & Flexbox)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Responsive Design

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer
- Helmet (Security)
- Morgan (Logging)
- CORS

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Step 1: Clone/Setup Project
```bash
# Navigate to project directory
cd portfolio-website

# Install dependencies
npm install
```

### Step 2: Configure Environment
Create a `.env` file in the root directory with the following variables:

```env
# Server
NODE_ENV=development
PORT=3000
HOST=localhost

# MongoDB
MONGODB_URI=mongodb://localhost:27017/portfolio
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority

# Email (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
ADMIN_EMAIL=njagikelvin60@gmail.com

# CORS
CORS_ORIGIN=http://localhost:3000,http://localhost

# Features
ENABLE_EMAIL_NOTIFICATIONS=true
ENABLE_DATABASE=true
```

⚠️ **Gmail Setup**: To use Gmail for sending emails:
1. Enable 2-factor authentication
2. Create an [App Password](https://support.google.com/accounts/answer/185833)
3. Use the App Password in .env

### Step 3: Set Up MongoDB

**Option A: Local MongoDB**
```bash
# Make sure MongoDB is running
mongod
```

**Option B: MongoDB Atlas**
1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Add to .env file

### Step 4: Run the Application

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

Visit http://localhost:3000 in your browser.

## 🌐 API Endpoints

### Public Endpoints

```
GET  /health                     - Health check
GET  /api/portfolio              - Get portfolio information
GET  /api/projects              - Get all projects (with filtering)
GET  /api/projects/:slug        - Get single project
GET  /api/services              - Get list of services
POST /api/contact               - Submit contact form
```

### Admin Endpoints (Protected)

```
GET    /api/contact/messages           - Get all messages
GET    /api/contact/messages/:id       - Get single message
DELETE /api/contact/messages/:id       - Delete message
POST   /api/contact/messages/:id/reply - Send reply

POST   /api/projects                   - Create project
PUT    /api/projects/:id               - Update project
DELETE /api/projects/:id               - Delete project
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px

All sections adapt fluidly to screen size changes.

## 🎨 Design Features

- **Color Scheme**: Modern blue and cyan gradients
- **Typography**: Clean, readable fonts with good hierarchy
- **Animations**: Subtle fade-in and float animations
- **Hover Effects**: Interactive elements provide visual feedback
- **Cards**: Modern card-based layout with hover animations
- **Gradients**: Beautiful gradient backgrounds and text
- **Icons**: Font Awesome icons for visual enhancement

## 🔒 Security Features

- **Helmet.js**: HTTP headers security
- **CORS**: Cross-Origin Resource Sharing config
- **Input Validation**: Server-side validation
- **Email Validation**: RFC-compliant email checking
- **Error Handling**: Secure error messages
- **Environment Variables**: Sensitive data protection

## 📧 Contact Form Features

- **Client-side Validation**: Immediate user feedback
- **Server-side Validation**: Data integrity assurance
- **Email Notifications**: Admin receives new submissions
- **Confirmation Email**: User gets acknowledgment
- **Message Storage**: Saves to database for records
- **Status Tracking**: Messages marked as new/read/replied

## 🚀 Deployment

### Deploy to Heroku

```bash
# Install Heroku CLI
# Login to Heroku
heroku login

# Create new Heroku app
heroku create your-app-name

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your_mongodb_atlas_uri
heroku config:set EMAIL_USER=your_email@gmail.com
heroku config:set EMAIL_PASSWORD=your_app_password

# Deploy
git push heroku main
```

### Deploy to AWS/GCP/Azure
Similar process - follow provider specific documentation.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (git checkout -b feature/AmazingFeature)
3. Commit changes (git commit -m 'Add AmazingFeature')
4. Push to branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 🐛 Troubleshooting

### MongoDB Connection Issues
```
Error: connect ECONNREFUSED
Solution: Ensure MongoDB is running (mongod) or check Atlas connection string
```

### Email Not Sending
```
Error: Invalid credentials
Solution: Check EMAIL_USER and EMAIL_PASSWORD in .env, verify Gmail app password
```

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::3000
Solution: Use different port in .env or kill process: lsof -ti:3000 | xargs kill
```

### CORS Errors
```
Solution: Check CORS_ORIGIN in .env includes your domain
```

## 📚 Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose ODM](https://mongoosejs.com/)
- [Nodemailer](https://nodemailer.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👨‍💻 Author

**Kelvin Njagi**
- Email: njagikelvin60@gmail.com
- Phone: +254 797 078 734
- Location: Embu, Kenya
- GitHub: [@kelvinnjagi](https://github.com/kelvinnjagi)
- LinkedIn: [Kelvin Njagi](https://linkedin.com)

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Built with love and attention to detail
- Special thanks to the open-source community

---

**Version**: 1.0.0  
**Last Updated**: February 2026  
**Status**: Production Ready ✅

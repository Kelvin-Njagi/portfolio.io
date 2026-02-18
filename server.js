// ============================
// PORTFOLIO WEBSITE BACKEND
// Main Server File
// ============================

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 3000;

// ============================
// MIDDLEWARE
// ============================

// Security middleware
app.use(helmet());

// CORS Configuration
const corsOptions = {
    origin: process.env.CORS_ORIGIN?.split(',') || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Compression middleware
app.use(compression());

// Logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('short'));
}

// Static files
app.use(express.static(path.join(__dirname)));

// ============================
// ROUTES
// ============================

// Health check route
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Contact Form Route
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid email address'
            });
        }

        // Log the contact message (in production, save to database or send email)
        console.log('Contact Form Submission:', {
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString()
        });

        // If email is enabled, send notification
        if (process.env.ENABLE_EMAIL_NOTIFICATIONS === 'true') {
            // Send email (implement separately)
            console.log('Email notification would be sent here');
        }

        // Success response
        res.json({
            success: true,
            message: 'Thank you for your message! I will respond as soon as possible.'
        });

    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while processing your request'
        });
    }
});

// Get projects (example endpoint)
app.get('/api/projects', (req, res) => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce website with payment integration',
            technologies: ['HTML/CSS', 'JavaScript', 'Python'],
            image: 'images/webdevelopment.jpg',
            url: '#'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Android mobile application for task management',
            technologies: ['Java', 'Firebase', 'Mobile'],
            image: 'images/appdevelopment.jpg',
            url: '#'
        },
        {
            id: 3,
            title: 'Data Analytics Dashboard',
            description: 'Real-time business analytics with interactive charts',
            technologies: ['React', 'D3.js', 'Node.js'],
            image: 'images/database.jpg',
            url: '#'
        }
    ];
    
    res.json({
        success: true,
        projects: projects
    });
});

// Get services
app.get('/api/services', (req, res) => {
    const services = [
        {
            id: 1,
            title: 'Web Development',
            description: 'Custom websites and web applications using modern frameworks',
            icon: 'fa-code'
        },
        {
            id: 2,
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications',
            icon: 'fa-mobile-alt'
        },
        {
            id: 3,
            title: 'Database Design & Management',
            description: 'Designing and optimizing databases for performance',
            icon: 'fa-database'
        },
        {
            id: 4,
            title: 'Network Administration',
            description: 'Setting up and managing computer networks',
            icon: 'fa-network-wired'
        },
        {
            id: 5,
            title: 'Cybersecurity',
            description: 'Comprehensive security assessments and implementations',
            icon: 'fa-shield-alt'
        },
        {
            id: 6,
            title: 'Technical Support',
            description: '24/7 technical assistance and IT support',
            icon: 'fa-headset'
        },
        {
            id: 7,
            title: 'Business Analysis',
            description: 'Identifying business needs and recommending IT solutions',
            icon: 'fa-chart-line'
        },
        {
            id: 8,
            title: 'Project Management',
            description: 'End-to-end project management using Agile methodologies',
            icon: 'fa-tasks'
        },
        {
            id: 9,
            title: 'Digital Marketing',
            description: 'SEO optimization and digital strategy',
            icon: 'fa-bullhorn'
        },
        {
            id: 10,
            title: 'Technology Consulting',
            description: 'Expert consulting for technology challenges',
            icon: 'fa-lightbulb'
        }
    ];
    
    res.json({
        success: true,
        services: services
    });
});

// Get portfolio info
app.get('/api/portfolio', (req, res) => {
    const portfolioInfo = {
        name: 'Kelvin Njagi',
        title: 'Full Stack Developer & Tech Consultant',
        bio: 'I\'m a Fourth Year BBIT Student at the University of Embu, passionate about transforming ideas into powerful digital solutions.',
        email: 'njagikelvin60@gmail.com',
        phone: '+254 797 078 734',
        location: 'Embu, Kenya',
        social: {
            linkedin: 'https://linkedin.com/in/kelvin-njagi',
            github: 'https://github.com/kelvinnjagi',
            twitter: 'https://twitter.com/kelvin_njagi'
        }
    };
    
    res.json({
        success: true,
        data: portfolioInfo
    });
});

// 404 Error Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        path: req.path
    });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error('Server Error:', err);
    
    res.status(err.status || 500).json({
        success: false,
        message: process.env.NODE_ENV === 'development' 
            ? err.message 
            : 'An error occurred on the server',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

// ============================
// START SERVER
// ============================

// Use PORT from environment (platforms like Render provide this)
const port = process.env.PORT || PORT || 3000;

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    process.exit(1);
});

module.exports = app;

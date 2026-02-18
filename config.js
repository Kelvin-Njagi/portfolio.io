// ============================
// CONFIG MANAGEMENT
// ============================

require('dotenv').config();

const config = {
    // Server Configuration
    server: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost',
        env: process.env.NODE_ENV || 'development',
        apiBaseUrl: process.env.API_BASE_URL || `http://localhost:${process.env.PORT || 3000}`
    },

    // Database Configuration
    database: {
        enabled: process.env.ENABLE_DATABASE === 'true',
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        }
    },

    // Email Configuration
    email: {
        enabled: process.env.ENABLE_EMAIL_NOTIFICATIONS === 'true',
        service: {
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT, 10) || 587,
            secure: process.env.EMAIL_PORT === '465',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        },
        from: process.env.EMAIL_FROM || 'noreply@portfolio.com',
        adminEmail: process.env.ADMIN_EMAIL || 'admin@portfolio.com'
    },

    // CORS Configuration
    cors: {
        origin: (process.env.CORS_ORIGIN || 'http://localhost:3000').split(','),
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    },

    // Security Configuration
    security: {
        jwtSecret: process.env.JWT_SECRET || 'change-me-in-production',
        sessionSecret: process.env.SESSION_SECRET || 'change-me-in-production'
    },

    // File Upload Configuration
    upload: {
        maxFileSize: parseInt(process.env.MAX_FILE_SIZE, 10) || 5242880, // 5MB
        uploadDir: process.env.UPLOAD_DIR || './uploads',
        allowedMimeTypes: [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/webp',
            'application/pdf'
        ]
    }
};

// Validate required environment variables
const validateConfig = () => {
    const errors = [];

    if (config.email.enabled) {
        if (!config.email.service.auth.user) {
            errors.push('EMAIL_USER is required when email is enabled');
        }
        if (!config.email.service.auth.pass) {
            errors.push('EMAIL_PASSWORD is required when email is enabled');
        }
    }

    if (config.database.enabled) {
        if (!config.database.uri) {
            errors.push('MONGODB_URI is required when database is enabled');
        }
    }

    if (errors.length > 0) {
        console.warn('⚠️  Configuration Warnings:');
        errors.forEach(error => console.warn(`  - ${error}`));
    }
};

validateConfig();

module.exports = config;

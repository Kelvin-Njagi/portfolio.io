// ============================
// DATABASE CONNECTION UTILITY
// ============================

const mongoose = require('mongoose');

/**
 * Connect to MongoDB database
 */
exports.connectDatabase = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

        const connection = await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        });

        console.log(`
        ✅ MongoDB Connected Successfully
        📍 Database: ${connection.connection.db.databaseName}
        🖥️  Host: ${connection.connection.host}
        `);

        return connection;
    } catch (error) {
        console.error(`
        ❌ MongoDB Connection Error:
        ${error.message}

        💡 Make sure MongoDB is running or check your connection string
        `);
        process.exit(1);
    }
};

/**
 * Disconnect from MongoDB
 */
exports.disconnectDatabase = async () => {
    try {
        await mongoose.disconnect();
        console.log('✅ Disconnected from MongoDB');
    } catch (error) {
        console.error('❌ Error disconnecting from MongoDB:', error);
    }
};

/**
 * Get database status
 */
exports.getDatabaseStatus = () => {
    const readyState = mongoose.connection.readyState;
    const states = {
        0: 'disconnected',
        1: 'connected',
        2: 'connecting',
        3: 'disconnecting'
    };
    return states[readyState] || 'unknown';
};

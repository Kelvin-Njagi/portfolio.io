// ============================
// CONTACT MESSAGE MODEL
// ============================

const mongoose = require('mongoose');

const contactMessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name'],
        trim: true,
        maxlength: [100, 'Name cannot be more than 100 characters']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please provide a valid email address'
        ]
    },
    subject: {
        type: String,
        required: [true, 'Please provide a subject'],
        trim: true,
        maxlength: [200, 'Subject cannot be more than 200 characters']
    },
    message: {
        type: String,
        required: [true, 'Please provide a message'],
        maxlength: [5000, 'Message cannot be more than 5000 characters']
    },
    status: {
        type: String,
        enum: ['new', 'read', 'replied', 'archived'],
        default: 'new'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    repliedAt: {
        type: Date,
        default: null
    },
    replyMessage: {
        type: String,
        default: null
    }
}, { timestamps: true });

// Index for faster queries
contactMessageSchema.index({ email: 1 });
contactMessageSchema.index({ createdAt: -1 });
contactMessageSchema.index({ status: 1 });

// Add a method to send email notification
contactMessageSchema.methods.sendNotification = async function() {
    // This would integrate with email service
    console.log(`Notification email would be sent for message from ${this.email}`);
};

module.exports = mongoose.model('ContactMessage', contactMessageSchema);

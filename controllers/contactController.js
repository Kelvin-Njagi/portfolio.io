// ============================
// CONTACT CONTROLLER
// ============================

// Handle contact form submission
exports.submitContact = async (req, res) => {
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

        // Message length validation
        if (message.length < 10) {
            return res.status(400).json({
                success: false,
                message: 'Message must be at least 10 characters long'
            });
        }

        // Log the contact message
        console.log('Contact Form Submission:', {
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString()
        });

        // TODO: Save to database
        // TODO: Send email notification
        // TODO: Send confirmation email to user

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
};

// Get all contact messages (for admin)
exports.getAllMessages = async (req, res) => {
    try {
        // TODO: Implement authentication check
        // TODO: Fetch from database

        res.json({
            success: true,
            messages: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching messages'
        });
    }
};

// Get single message by ID
exports.getMessage = async (req, res) => {
    try {
        const { id } = req.params;

        // TODO: Fetch from database

        res.json({
            success: true,
            message: null
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching message'
        });
    }
};

// Delete message
exports.deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;

        // TODO: Implement authentication check
        // TODO: Delete from database

        res.json({
            success: true,
            message: 'Message deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting message'
        });
    }
};

// Reply to message
exports.replyMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const { reply } = req.body;

        if (!reply) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a reply message'
            });
        }

        // TODO: Implement authentication check
        // TODO: Update message in database
        // TODO: Send reply email

        res.json({
            success: true,
            message: 'Reply sent successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error sending reply'
        });
    }
};

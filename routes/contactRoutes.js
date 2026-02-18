// ============================
// CONTACT ROUTES
// ============================

const express = require('express');
const router = express.Router();
const { 
    submitContact, 
    getAllMessages, 
    getMessage, 
    deleteMessage, 
    replyMessage 
} = require('../controllers/contactController');

// Public routes
router.post('/contact', submitContact);

// Admin routes (should be protected with authentication middleware)
router.get('/contact/messages', getAllMessages);
router.get('/contact/messages/:id', getMessage);
router.delete('/contact/messages/:id', deleteMessage);
router.post('/contact/messages/:id/reply', replyMessage);

module.exports = router;

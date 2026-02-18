// ============================
// EMAIL SERVICE UTILITY
// ============================

const nodemailer = require('nodemailer');

// Email transporter configuration
const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });
};

/**
 * Send contact confirmation email to user
 */
exports.sendContactConfirmationEmail = async (email, name) => {
    try {
        const transporter = createTransporter();

        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: 'We received your message',
            html: `
                <h2>Thank you for reaching out, ${name}!</h2>
                <p>We have received your message and will get back to you as soon as possible.</p>
                <p>Your message is important to us.</p>
                <br>
                <p>Best regards,<br>Kelvin Njagi</p>
            `
        };

        const result = await transporter.sendMail(mailOptions);
        console.log('Confirmation email sent:', result.response);
        return true;
    } catch (error) {
        console.error('Error sending confirmation email:', error);
        return false;
    }
};

/**
 * Send contact notification email to admin
 */
exports.sendContactNotificationEmail = async (contactData) => {
    try {
        const transporter = createTransporter();
        const { name, email, subject, message } = contactData;

        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.ADMIN_EMAIL,
            subject: `New Contact Form Submission: ${subject}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr>
                <h3>Message:</h3>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p><small>Received at: ${new Date().toLocaleString()}</small></p>
            `
        };

        const result = await transporter.sendMail(mailOptions);
        console.log('Notification email sent:', result.response);
        return true;
    } catch (error) {
        console.error('Error sending notification email:', error);
        return false;
    }
};

/**
 * Send reply email to contact
 */
exports.sendReplyEmail = async (email, name, reply) => {
    try {
        const transporter = createTransporter();

        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: 'Re: Your message to Kelvin Njagi',
            html: `
                <h2>Hello ${name},</h2>
                <p>Thank you for your message. Here's my reply:</p>
                <hr>
                <p>${reply.replace(/\n/g, '<br>')}</p>
                <hr>
                <p>Best regards,<br>Kelvin Njagi</p>
            `
        };

        const result = await transporter.sendMail(mailOptions);
        console.log('Reply email sent:', result.response);
        return true;
    } catch (error) {
        console.error('Error sending reply email:', error);
        return false;
    }
};

/**
 * Send generic email
 */
exports.sendEmail = async (options) => {
    try {
        const transporter = createTransporter();

        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: options.to,
            subject: options.subject,
            html: options.html
        };

        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent:', result.response);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
};

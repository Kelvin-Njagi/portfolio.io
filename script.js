// ============================
// MODERN PORTFOLIO JAVASCRIPT
// ============================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initMobileMenu();
    initNavigation();
    initContactForm();
    initAnimations();
});

// ============================
// MOBILE MENU FUNCTIONALITY
// ============================

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navbar.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navbar.classList.remove('active');
            });
        });
    }
}

// ============================
// NAVIGATION & SECTION SWITCHING
// ============================

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main > section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('data-section');
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('visible');
                section.classList.add('hidden');
            });

            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                targetSection.classList.add('visible');
                
                // Smooth scroll to top
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 50);
            }
        });
    });

    // Set initial active state to Home tab
    const homeLink = document.querySelector('[data-section="home"]');
    if (homeLink) {
        homeLink.classList.add('active');
        document.getElementById('home').classList.add('visible');
    }
}

// ============================
// CONTACT FORM HANDLING
// ============================

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    if (contactForm) {
        // Show success message before form submission
        contactForm.addEventListener('submit', function(event) {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Form will submit to FormSubmit.co automatically
            // FormSubmit handles the actual email sending
        });
    }
}


// ============================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================

function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all service items, project cards, and other elements
    document.querySelectorAll('.service-item, .project-card, .skill-category, .interest-card').forEach(el => {
        observer.observe(el);
    });
}

// Scroll spy removed - tabs only change on click

// ============================
// SMOOTH SCROLL BEHAVIOR
// ============================

// For browsers that don't support scroll-behavior: smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================
// UTILITY FUNCTIONS
// ============================

// Function to validate email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Add scroll animations on page load
window.addEventListener('load', () => {
    // Trigger animation for hero section
    const heroSection = document.getElementById('home');
    if (heroSection) {
        heroSection.classList.add('visible');
    }
});

// ============================
// KEYBOARD NAVIGATION
// ============================

document.addEventListener('keydown', function(e) {
    // Close mobile menu on Escape key
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');
    if (e.key === 'Escape' && menuToggle && navbar) {
        menuToggle.classList.remove('active');
        navbar.classList.remove('active');
    }
});

// ============================
// DOCUMENT DOWNLOAD TRACKING
// ============================

function initDocumentDownloads() {
    const downloadLinks = document.querySelectorAll('.btn-compact[download]');
    
    downloadLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const docName = this.getAttribute('href').split('/').pop();
            console.log('Downloading document:', docName);
            
            // Optional: Send analytics or notification
            if (typeof trackEvent === 'function') {
                trackEvent('document_download', {
                    document: docName,
                    timestamp: new Date().toISOString()
                });
            }
        });
    });
}

// Initialize document downloads when page loads
document.addEventListener('DOMContentLoaded', initDocumentDownloads);
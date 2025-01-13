document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar .nav-list a'); // More specific selector
    const sections = document.querySelectorAll('main > section'); // Target direct children of <main>

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Use for...of loop for better performance when breaking early
            for (const section of sections) {
                section.classList.remove('visible');
                section.classList.add('hidden');
            }

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.classList.remove('hidden');
                targetSection.classList.add('visible');
                // Optional: Add smooth scrolling
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const responseMessage = document.createElement('div'); // Create response message element
        responseMessage.id = 'response-message';
        contactForm.parentNode.insertBefore(responseMessage, contactForm.nextSibling);

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(this);

            fetch('/submit-form', {
                method: 'POST',
                body: formData
            })
            .then(response => {
              if (!response.ok) {
                //Handle HTTP errors (404, 500, etc.)
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
            })
            .then(data => {
                responseMessage.textContent = data.message || 'Message sent successfully!';
                responseMessage.classList.add('success-message'); // Add a class for styling
                responseMessage.classList.remove('error-message');
                contactForm.reset();
            })
            .catch(error => {
                responseMessage.textContent = 'There was an error sending your message. Please try again later.';
                responseMessage.classList.add('error-message'); // Add a class for styling
                responseMessage.classList.remove('success-message');
                console.error('Error:', error);
            });
        });
    }
});
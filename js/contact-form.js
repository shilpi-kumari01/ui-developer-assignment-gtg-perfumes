/* ============================================
   Contact Form Handler
   ============================================ */

const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Clear error messages
 */
function clearErrors() {
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('subject-error').textContent = '';
    document.getElementById('message-error').textContent = '';
}

/**
 * Show error message
 */
function showError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

/**
 * Validate form
 */
function validateForm() {
    clearErrors();
    let isValid = true;

    // Validate name
    if (!nameInput.value.trim()) {
        showError('name', 'Please enter your name');
        isValid = false;
    }

    // Validate email
    if (!emailInput.value.trim()) {
        showError('email', 'Please enter your email');
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate subject
    if (!subjectInput.value.trim()) {
        showError('subject', 'Please enter a subject');
        isValid = false;
    }

    // Validate message
    if (!messageInput.value.trim()) {
        showError('message', 'Please enter your message');
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        showError('message', 'Message should be at least 10 characters long');
        isValid = false;
    }

    return isValid;
}

/**
 * Reset form
 */
function resetForm() {
    contactForm.reset();
    clearErrors();
}

/**
 * Show success message
 */
function showSuccessMessage() {
    successMessage.classList.add('show');
    
    // Hide form
    contactForm.style.display = 'none';
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth' });

    // Reset form after 3 seconds
    setTimeout(() => {
        resetForm();
        contactForm.style.display = 'block';
        successMessage.classList.remove('show');
    }, 3000);
}

/**
 * Handle form submission
 */
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate form
    if (validateForm()) {
        // Show success message
        showSuccessMessage();
        
        // In a real application, you would send the form data to a backend server here
        // Example:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         name: nameInput.value,
        //         email: emailInput.value,
        //         subject: subjectInput.value,
        //         message: messageInput.value
        //     })
        // });
    }
});

/**
 * Add real-time validation feedback
 */
nameInput.addEventListener('blur', () => {
    if (nameInput.value.trim()) {
        document.getElementById('name-error').textContent = '';
    }
});

emailInput.addEventListener('blur', () => {
    if (emailInput.value.trim() && isValidEmail(emailInput.value)) {
        document.getElementById('email-error').textContent = '';
    }
});

subjectInput.addEventListener('blur', () => {
    if (subjectInput.value.trim()) {
        document.getElementById('subject-error').textContent = '';
    }
});

messageInput.addEventListener('blur', () => {
    if (messageInput.value.trim().length >= 10) {
        document.getElementById('message-error').textContent = '';
    }
});

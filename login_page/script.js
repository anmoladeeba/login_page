document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Function to validate email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate password
    function validatePassword(password) {
        return password.length >= 6;
    }

    // Function to clear errors
    function clearErrors() {
        emailError.textContent = '';
        passwordError.textContent = '';
    }

    // Function to show error message
    function showError(element, message) {
        element.textContent = message;
    }

    // Add input event listeners for real-time validation
    emailInput.addEventListener('input', function() {
        if (!validateEmail(this.value)) {
            showError(emailError, 'Please enter a valid email address');
        } else {
            emailError.textContent = '';
        }
    });

    passwordInput.addEventListener('input', function() {
        if (!validatePassword(this.value)) {
            showError(passwordError, 'Password must be at least 6 characters');
        } else {
            passwordError.textContent = '';
        }
    });

    // Handle form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        clearErrors();

        let isValid = true;

        // Validate email
        if (!emailInput.value) {
            showError(emailError, 'Email is required');
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            showError(emailError, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate password
        if (!passwordInput.value) {
            showError(passwordError, 'Password is required');
            isValid = false;
        } else if (!validatePassword(passwordInput.value)) {
            showError(passwordError, 'Password must be at least 6 characters');
            isValid = false;
        }

        if (isValid) {
            // Here you would typically send the data to your server
            console.log('Form submitted:', {
                email: emailInput.value,
                password: passwordInput.value
            });
            
            // Clear the form
            loginForm.reset();
            alert('Login successful!');
        }
    });

    // Handle forgot password link
    document.getElementById('forgotPassword').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Forgot password functionality would be implemented here');
    });

    // Handle sign up link
    document.getElementById('signUp').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Sign up functionality would be implemented here');
    });
}); 
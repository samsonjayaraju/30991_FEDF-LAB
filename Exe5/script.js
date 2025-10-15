const form = document.getElementById('regform');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phone = document.getElementById('phone');
const msg = document.getElementById('msg');
const fullNameError = document.getElementById('fullNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const phoneError = document.getElementById('phoneError');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Real-time validation
[fullName, email, password, phone].forEach(input => {
    input.addEventListener('input', function() {
        validateInput(this);
    });
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm()) {
        msg.classList.remove('hidden');
        msg.innerText = 'Registration Successful!';
        msg.classList.add('success');
        form.reset();
        setTimeout(() => msg.classList.add('hidden'), 3000);
    }
});

function validateInput(input) {
    let errorSpan;
    switch(input.id) {
        case 'fullName':
            errorSpan = fullNameError;
            if (!input.value.trim()) {
                showError(errorSpan, 'Full Name is required');
                input.classList.add('error');
            } else {
                clearError(errorSpan);
                input.classList.remove('error');
                input.classList.add('success');
            }
            break;
        case 'email':
            errorSpan = emailError;
            if (!emailRegex.test(input.value)) {
                showError(errorSpan, 'Invalid Email');
                input.classList.add('error');
            } else {
                clearError(errorSpan);
                input.classList.remove('error');
                input.classList.add('success');
            }
            break;
        case 'password':
            errorSpan = passwordError;
            if (input.value.length < 6) {
                showError(errorSpan, 'Weak Password');
                input.classList.add('error');
            } else {
                clearError(errorSpan);
                input.classList.remove('error');
                input.classList.add('success');
            }
            break;
        case 'phone':
            errorSpan = phoneError;
            if (!input.value.match(/^[0-9]{10}$/)) {
                showError(errorSpan, 'Invalid Phone');
                input.classList.add('error');
            } else {
                clearError(errorSpan);
                input.classList.remove('error');
                input.classList.add('success');
            }
            break;
    }
}

function validateForm() {
    let isValid = true;
    [fullName, email, password, phone].forEach(input => {
        if (!validateInput(input)) isValid = false;
    });
    return isValid;
}

function showError(span, message) {
    span.classList.remove('hidden');
    span.innerText = message;
}

function clearError(span) {
    span.classList.add('hidden');
    span.innerText = '';
}
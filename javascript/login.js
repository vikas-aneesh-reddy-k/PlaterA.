document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Basic validation
    if (email === '' || password === '') {
        alert('Please fill in both fields.');
        return;
    }

    // Simulate a login process
    if (email === 'test@example.com' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid email or password.');
    }
});

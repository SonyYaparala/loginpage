document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var message = document.getElementById('message');

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match. Please try again.";
    } else {
        message.textContent = "Signup successful! Welcome, " + username + "!";
        // Here, you can send the signup data to your server for further processing
    }
});

localStorage.setItem("username", "bachar");
localStorage.setItem("password", "bachar");


    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', login);

function login() {
    // Retrieve stored credentials
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Get user input
    const username = document.getElementById('email-phone').value.trim();
    const password = document.getElementById('password').value.trim();

    if(username === storedUsername && password === storedPassword) {
        window.location.href = 'home.html'; // Redirect to home page on successful login
    } else {
        document.getElementById('error-message').innerText = 'Incorrect username or password'; 
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        login();
    }
});
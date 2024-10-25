const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

const validUsername = "admin";
const validPassword = "1234";

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        alert("Login bem-sucedido!");
        window.location.href = "admin_dashboard.html";
    } else {
        loginMessage.style.display = 'block';
    }
});

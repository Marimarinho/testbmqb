let cartTotal = 0;

function addToCart(productPrice) {
    cartTotal += productPrice;
    updateCartCounter(cartTotal);
}

function updateCartCounter(total) {
    document.getElementById("cart-counter").textContent = "R$ " + total.toFixed(2);
}

// Menu Hambúrguer
const menuIcon = document.querySelector('.menu-icon');
const navbarContainer = document.querySelector('.navbar-container');

menuIcon.addEventListener('click', () => {
    console.log('Menu clicado'); // Verificação no console
    navbarContainer.classList.toggle('open');
});

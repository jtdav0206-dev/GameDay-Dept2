let cart = [];

function addToCart(item, price) {
    cart.push({item, price});
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');
    if (cartItems) {
        cartItems.innerHTML = '';
        let sum = 0;
        cart.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.item} - $${product.price}`;
            cartItems.appendChild(li);
            sum += product.price;
        });
        total.textContent = sum.toFixed(2);
    }
}

document.addEventListener('DOMContentLoaded', function() {
  
    const cart = [];
    const cartItemsList = document.getElementById('cart-items');
    
    function updateCart() {
        cartItemsList.innerHTML = ''; 
        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - ${item.price}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                cart.splice(index, 1);
                updateCart();
            });
            listItem.appendChild(removeButton);
            cartItemsList.appendChild(listItem);
        });
    }

    function addToCart(item) {
        cart.push(item);
        updateCart();
    }

    window.addToCart = addToCart; 
});

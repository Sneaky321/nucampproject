document.addEventListener('DOMContentLoaded', function() {
    const menuSection = document.getElementById('menu');

    if (!menuSection) {
        console.error('Element with id "menu" not found.');
        return;
    }

   
    const menu = [
        {
            category: "Appetizers",
            items: [
                {
                    name: "Bruschetta",
                    description: "Grilled bread with tomatoes, basil, and garlic",
                    price: "$8.99",
                    image: "./Images/Bruscetta.jpg"
                }
            ]
        },
        {
            items: [
                {
                    name: "Peachy Muesli Parfait",
                    description: "(Peaches in Yoghurt with Almond Toasted Muesli)",
                    price: "$8.99",
                    image: "./Images/Museli Yougurty.jpg"
                }
            ]
        },
        {
            items: [
                {
                    name: "Egg, Ham Toast",
                    description: "Egg, Ham, Tomato & Basil and Cheese on a toasted open faced Thin",
                    price: "$8.99",
                    image: "./Images/Eggham.jpg"
                }
            ]
        },
        {
            category: "Main Courses",
            items: [
                {
                    name: "Grilled Salmon",
                    description: "Salmon fillet grilled to perfection",
                    price: "$15.99",
                    image: "Images/Grilled Salmon.jpg"
                }
            ]
        },
        {
            items: [
                {
                    name: "Mexican Pulled Beef Nachos",
                    description: "Mexican Pulled Beef Nachos with Cheese and Smashed Avocado",
                    price: "$15.99",
                    image: "Images/Nachos.jpg"
                }
            ]
        },
        {
            items: [
                {
                    name: "Cheese, Tomato and Smashed Avocado Salmon",
                    description: "Cheese, Tomato and Smashed Avocado Sandwich Thin Toasti",
                    price: "$15.99",
                    image: "Images/EGGAvocado.jpg"
                }
            ]
        }
    ];

   
    const cart = [];
    function updateCart() {
        const cartItemsList = document.getElementById('cart-items');
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

   
    function createMenu(menu) {
        menu.forEach(category => {
            if (category.category) {
                const categoryHeader = document.createElement('h2');
                categoryHeader.textContent = category.category;
                menuSection.appendChild(categoryHeader);
            }

            const itemList = document.createElement('ul');
            category.items.forEach(item => {
                const listItem = document.createElement('li');
                const itemContainer = document.createElement('div');
                itemContainer.classList.add('menu-item');

                const itemImage = document.createElement('img');
                itemImage.src = item.image;
                itemImage.alt = item.name;
                itemImage.classList.add('menu-image');

                const itemDetails = document.createElement('div');
                itemDetails.classList.add('menu-details');

                const itemName = document.createElement('strong');
                itemName.textContent = item.name;

                const itemDescription = document.createElement('p');
                itemDescription.textContent = item.description;

                const itemPrice = document.createElement('span');
                itemPrice.textContent = item.price;
                itemPrice.classList.add('price');

                const addButton = document.createElement('button');
                addButton.textContent = 'Add to Cart';
                addButton.addEventListener('click', () => addToCart(item));

                itemDetails.appendChild(itemName);
                itemDetails.appendChild(itemDescription);
                itemDetails.appendChild(itemPrice);
                itemDetails.appendChild(addButton);

                itemContainer.appendChild(itemImage);
                itemContainer.appendChild(itemDetails);

                listItem.appendChild(itemContainer);
                itemList.appendChild(listItem);
            });

            menuSection.appendChild(itemList);
        });
    }

    createMenu(menu);

    const checkoutButton = document.getElementById('checkout');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            alert('Checkout functionality not implemented.');
        });
    } else {
        console.error('Element with id "checkout" not found.');
    }

    const style = document.createElement('style');
    style.textContent = `
    #menu {
        padding: 20px;
        background-color: #f9f9f9;
    }
    
    h2 {
        color: #2e8b57;
        font-family: 'Arial', sans-serif;
        border-bottom: 2px solid #2e8b57;
        padding-bottom: 10px;
        margin-bottom: 20px;
    }
    
    .menu-item {
        display: flex;
        border: 1px solid #ddd;
        border-radius: 8px;
        margin-bottom: 20px;
        overflow: hidden;
        background-color: #fff;
    }
    
    .menu-image {
        width: 150px;
        height: 150px;
        object-fit: cover;
    }
    
    .menu-details {
        padding: 10px;
        flex: 1;
    }
    
    .menu-details strong {
        display: block;
        font-size: 1.2em;
        color: #2e8b57;
    }
    
    .menu-details p {
        font-size: 0.9em;
        color: #555;
    }
    
    .price {
        display: block;
        font-size: 1.1em;
        margin: 10px 0;
        color: #2e8b57;
    }
    
    button {
        background-color: #2e8b57;
        border: none;
        color: white;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
        transition: background-color 0.3s;
    }
    
    button:hover {
        background-color: #238d4e;
    }
    
    ul {
        list-style: none;
        padding: 0;
    }
    
    li {
        margin-bottom: 20px;
    }
    `;
    document.head.appendChild(style);
});

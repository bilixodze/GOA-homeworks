const cart = [];

    function addToCart(name, price) {
        const item = { name, price };
        cart.push(item);
        displayCart();
    }

    function displayCart() {
        const cartDiv = document.getElementById('cart');
        cartDiv.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `<span>${item.name}</span> <span>${item.price}₾</span>`;
            cartDiv.appendChild(itemDiv);
            total += item.price;
        });

        const totalDiv = document.createElement('div');
        totalDiv.className = 'cart-item';
        totalDiv.innerHTML = `<strong>სულ:</strong> <span>${total}₾</span>`;
        cartDiv.appendChild(totalDiv);
    }
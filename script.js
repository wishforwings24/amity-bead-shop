console.log('Welcome to Amity Bead Shop');

document.addEventListener('DOMContentLoaded', () => {
    // --- Product Rendering ---
    const productGrid = document.getElementById('product-grid');
    const totalProducts = 21; 
    const productPrice = 5.00; // Store as number for calc

    const productNames = {
        1: "Pearl",
        2: "Grape Green",
        3: "Avo",
        4: "Trippy Fish",
        5: "La-Pink-Bu",
        6: "La-Yellow-Bu",
        7: "Crystal",
        8: "La-Brown-Bu",
        9: "Blossom Space",
        10: "Oreo",
        11: "Rainbow",
        12: "Rainbow Apple",
        13: "Sweet Cherry Pie",
        14: "Candy Shop",
        15: "Cosmic",
        16: "Grape Purple",
        17: "Zesty Pop",
        18: "Neon Citrus",
        19: "Bombom",
        20: "Smiley Face",
        21: "Rocky Strawberry"
    };

    if (productGrid) {
        for (let i = 1; i <= totalProducts; i++) {
            const article = document.createElement('article');
            article.className = 'product-card';
            
            const name = productNames[i] || `Gemstone Bracelet #${i}`;
            
            article.innerHTML = `
                <img src="assets/images/product-${i}.jpg" alt="${name}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h3 class="product-title">${name}</h3>
                    <div class="product-price">$${productPrice.toFixed(2)}</div>
                    <button class="btn btn-block add-to-cart-btn" data-id="${i}" data-name="${name}" data-price="${productPrice}" style="margin-top: 10px; padding: 8px;">Add to Cart</button>
                </div>
            `;
            
            productGrid.appendChild(article);
        }
    }

    // --- Shopping Cart Logic ---
    let cart = JSON.parse(localStorage.getItem('amityCart')) || [];
    
    const cartToggle = document.getElementById('cart-toggle');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartBtn = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total-price');
    const cartCountElement = document.getElementById('cart-count');
    
    // UI Toggles
    function openCart() {
        cartDrawer.classList.add('open');
        cartOverlay.classList.add('open');
    }
    
    function closeCart() {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('open');
    }

    if (cartToggle) cartToggle.addEventListener('click', (e) => { e.preventDefault(); openCart(); });
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    // Add to Cart
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const id = e.target.getAttribute('data-id');
            const name = e.target.getAttribute('data-name');
            const price = parseFloat(e.target.getAttribute('data-price'));
            
            addToCart({ id, name, price });
            openCart();
        }
    });
    
    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
    }
    
    // Remove from Cart
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-item')) {
                const id = e.target.getAttribute('data-id');
                removeFromCart(id);
            }
        });
    }
    
    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        updateCart();
    }
    
    function updateCart() {
        localStorage.setItem('amityCart', JSON.stringify(cart));
        renderCart();
    }
    
    function renderCart() {
        // Update Count
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountElement) cartCountElement.textContent = totalCount;
        
        // Update Total Price
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (cartTotalElement) cartTotalElement.textContent = '$' + totalPrice.toFixed(2);
        
        // Render Items
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '';
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your cart is empty.</p>';
                return;
            }
            
            cart.forEach(item => {
                const itemEl = document.createElement('div');
                itemEl.className = 'cart-item';
                itemEl.innerHTML = `
                    <img src="assets/images/product-${item.id}.jpg" alt="${item.name}">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                        <button class="remove-item" data-id="${item.id}">Remove</button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemEl);
            });
        }
    }
    
    // Initial Render
    renderCart();

    // --- Existing Utility ---
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only scroll if it's not the cart toggle
            if (this.id === 'cart-toggle') return;
            
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Checkout Logic ---
    const checkoutItemsContainer = document.getElementById('checkout-items');
    const checkoutSubtotal = document.getElementById('checkout-subtotal');
    const checkoutTotal = document.getElementById('checkout-total');
    const checkoutForm = document.getElementById('checkout-form');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Go to checkout button logic in Cart Drawer
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
             if (cart.length > 0) {
                 window.location.href = 'checkout.html';
             }
        });
    }

    // Render Checkout Page
    if (checkoutItemsContainer) {
        if (cart.length === 0) {
            checkoutItemsContainer.innerHTML = '<p>Your cart is empty. <a href="index.html">Go to Shop</a></p>';
        } else {
            renderCheckoutItems();
        }
    }

    function renderCheckoutItems() {
        checkoutItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const row = document.createElement('div');
            row.className = 'total-row';
            row.style.fontSize = '0.9rem';
            row.innerHTML = `
                <span>${item.name} x ${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            `;
            checkoutItemsContainer.appendChild(row);
            total += item.price * item.quantity;
        });

        if (checkoutSubtotal) checkoutSubtotal.textContent = '$' + total.toFixed(2);
        if (checkoutTotal) checkoutTotal.textContent = '$' + total.toFixed(2);
    }

    // Handle Checkout Submit
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = checkoutForm.querySelector('button[type="submit"]');
            btn.textContent = 'Generating Email...';
            btn.disabled = true;

            // Gather Customer Info
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;
            const city = document.getElementById('city').value;
            const zip = document.getElementById('zip').value;

            // Build HTML Order String (Modern Table)
            let orderBody = `
                <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
                    <h2 style="color: #5D2E46; border-bottom: 2px solid #FBCFE8; padding-bottom: 10px;">Order Summary</h2>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr style="background-color: #FFF5F8;">
                            <th style="padding: 10px; text-align: left; color: #5D2E46;">Item</th>
                            <th style="padding: 10px; text-align: right; color: #5D2E46;">Qty</th>
                            <th style="padding: 10px; text-align: right; color: #5D2E46;">Price</th>
                        </tr>
            `;
            
            let total = 0;
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                orderBody += `
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #FBCFE8;">${item.name}</td>
                        <td style="padding: 10px; text-align: right; border-bottom: 1px solid #FBCFE8;">${item.quantity}</td>
                        <td style="padding: 10px; text-align: right; border-bottom: 1px solid #FBCFE8;">$${itemTotal.toFixed(2)}</td>
                    </tr>
                `;
                total += itemTotal;
            });
            
            orderBody += `
                        <tr style="background-color: #FFF5F8; font-weight: bold;">
                            <td style="padding: 10px; text-align: left; color: #5D2E46;">TOTAL</td>
                            <td style="padding: 10px;"></td>
                            <td style="padding: 10px; text-align: right; color: #5D2E46;">$${total.toFixed(2)}</td>
                        </tr>
                    </table>
                    
                    <div style="margin-top: 30px; background-color: #F9FAFB; padding: 15px; border-radius: 5px;">
                        <h3 style="margin-top: 0; color: #5D2E46; font-size: 16px;">Customer Details</h3>
                        <p style="margin: 5px 0; color: #666;"><strong>Name:</strong> ${firstName} ${lastName}</p>
                        <p style="margin: 5px 0; color: #666;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 5px 0; color: #666;"><strong>Address:</strong><br>${address}<br>${city}, ${zip}</p>
                    </div>
                </div>
            `;

            // Trigger EmailJS
            const serviceID = 'service_c9pxsrb';
            const templateID = 'template_k1icy38'; 

            // 1. Send to Owner
            const sendToOwner = emailjs.send(serviceID, templateID, {
                to_email: 'amitysbeadshop@outlook.com',
                email_title: 'New Order Received',
                email_message: `You have received a new order from <strong>${firstName} ${lastName}</strong>.`,
                order_details: orderBody,
                total_price: `$${total.toFixed(2)}`
            });

            // 2. Send to Customer
            const sendToCustomer = emailjs.send(serviceID, templateID, {
                to_email: email,
                email_title: 'Order Confirmation',
                email_message: `Hi ${firstName},<br>Thank you for shopping with Amity Bead Shop! Here is a receipt of your order.`,
                order_details: orderBody,
                total_price: `$${total.toFixed(2)}`
            });

            Promise.all([sendToOwner, sendToCustomer])
            .then(() => {
                alert('Success! Your order has been placed and a confirmation email has been sent.');
                localStorage.removeItem('amityCart');
                window.location.href = 'index.html';
            })
            .catch((err) => {
                btn.textContent = 'Complete Order via Email';
                btn.disabled = false;
                alert('FAILED to send order. Please try again or contact us directly.\nError: ' + JSON.stringify(err));
            });
        });
    }
});

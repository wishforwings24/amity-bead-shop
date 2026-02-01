console.log('Welcome to Amity Bead Shop');

document.addEventListener('DOMContentLoaded', () => {
    // --- Product Rendering ---
    const productGrid = document.getElementById('product-grid');
    const totalProducts = 21; 
    const productPrice = 8.00; // Store as number for calc

    const productNames = {
        1: { name: "Pearl", category: "classic", desc: "Elegant and timeless, the Pearl bracelet features creamy white glass beads that mimic the luster of natural pearls." },
        2: { name: "Grape Green", category: "vibrant", desc: "A burst of summer energy! These translucent green beads capture the essence of vineyard-fresh grapes." },
        3: { name: "Avo", category: "pastel", desc: "Soft avocado tones paired with cream accents for a subtle, earthy look that goes with any outfit." },
        4: { name: "Trippy Fish", category: "vibrant", desc: "Psychodelic swirls and oceanic blues make this bracelet a conversation starter." },
        5: { name: "La-Pink-Bu", category: "pastel", desc: "Part of our signature 'Bu' collection, featuring soft blush pinks and rose gold spacers." },
        6: { name: "La-Yellow-Bu", category: "pastel", desc: "Sunny yellow beads that bring a touch of warmth and optimism to your wrist." },
        7: { name: "Crystal", category: "classic", desc: "Clear as ice, these high-quality glass beads reflect light beautifully from every angle." },
        8: { name: "La-Brown-Bu", category: "classic", desc: "Earthy brown tones and wooden accents for a grounded, bohemian aesthetic." },
        9: { name: "Blossom Space", category: "limited", desc: "A cosmic blend of deep purples and flowery pinks, inspired by intergalactic gardens." },
        10: { name: "Oreo", category: "classic", desc: "A classic black and white contrast that is as sweet and versatile as its namesake." },
        11: { name: "Rainbow", category: "vibrant", desc: "Every color of the spectrum in one joyful loop. Perfect for making a statement." },
        12: { name: "Rainbow Apple", category: "vibrant", desc: "A fruit-inspired take on our rainbow theme, featuring crisp green and red highlights." },
        13: { name: "Sweet Cherry Pie", category: "vibrant", desc: "Deep red 'cherry' beads paired with crust-colored neutrals. Deliciously charming." },
        14: { name: "Candy Shop", category: "pastel", desc: "A sugary mix of mint, lilac, and peach. Looks good enough to eat (but please don't!)" },
        15: { name: "Cosmic", category: "limited", desc: "Nebula-inspired swirls of blue, purple, and silver glitter for a celestial touch." },
        16: { name: "Grape Purple", category: "vibrant", desc: "Rich amethyst-colored beads that add a royal touch to your jewelry collection." },
        17: { name: "Zesty Pop", category: "vibrant", desc: "Lime and lemon tones that practically sizzle with citrus energy." },
        18: { name: "Neon Citrus", category: "vibrant", desc: "High-visibility orange and yellow for those who aren't afraid to stand out." },
        19: { name: "Bombom", category: "limited", desc: "Playful oversized beads in a variety of textures. Unique and bold." },
        20: { name: "Smiley Face", category: "limited", desc: "Spread happiness with our iconic yellow smiley face charm bracelet." },
        21: { name: "Rocky Strawberry", category: "vibrant", desc: "Stone-textured red beads that look like fresh strawberries picked from a rocky field." }
    };

    let filteredProducts = [];
    for (let i = 1; i <= totalProducts; i++) {
        const p = productNames[i];
        filteredProducts.push({ id: i, ...p, price: productPrice });
    }

    function renderProducts(products) {
        if (!productGrid) return;
        productGrid.innerHTML = '';
        
        if (products.length === 0) {
            productGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 50px;"><h3>No products found matching your search.</h3></div>';
            return;
        }

        products.forEach(p => {
            const article = document.createElement('article');
            article.className = 'product-card';
            const isNew = p.id <= 3;
            const isHot = p.id > 18;
            
            article.innerHTML = `
                ${isNew ? '<span class="badge badge-new">New</span>' : ''}
                ${isHot ? '<span class="badge badge-hot">Hot</span>' : ''}
                <div class="product-image-container">
                    <img src="assets/images/product-${p.id}.jpg" alt="${p.name}" class="product-image" loading="lazy">
                    <div class="product-overlay">
                        <button class="quick-view-btn" data-id="${p.id}">Quick View</button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-rating">★★★★★</div>
                    <h3 class="product-title">${p.name}</h3>
                    <div class="product-price">$${p.price.toFixed(2)}</div>
                    <button class="btn btn-block add-to-cart-btn" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}">Add to Cart</button>
                </div>
            `;
            productGrid.appendChild(article);
        });
    }

    // Initial Render
    renderProducts(filteredProducts);

    // --- Filtering & Search ---
    const searchInput = document.getElementById('product-search');
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');

    function applyFilters() {
        let results = [];
        for (let i = 1; i <= totalProducts; i++) {
            results.push({ id: i, ...productNames[i], price: productPrice });
        }

        const searchTerm = searchInput?.value.toLowerCase() || '';
        const category = categoryFilter?.value || 'all';
        const sortBy = sortFilter?.value || 'newest';

        // Search
        if (searchTerm) {
            results = results.filter(p => p.name.toLowerCase().includes(searchTerm));
        }

        // Category
        if (category !== 'all') {
            results = results.filter(p => p.category === category);
        }

        // Sort
        if (sortBy === 'price-low') results.sort((a, b) => a.price - b.price);
        else if (sortBy === 'price-high') results.sort((a, b) => b.price - a.price);
        else if (sortBy === 'name-az') results.sort((a, b) => a.name.localeCompare(b.name));
        else if (sortBy === 'newest') results.sort((a, b) => b.id - a.id);

        renderProducts(results);
    }

    searchInput?.addEventListener('input', applyFilters);
    categoryFilter?.addEventListener('change', applyFilters);
    sortFilter?.addEventListener('change', applyFilters);

    // --- Quick View Modal ---
    const modal = document.getElementById('quick-view-modal');
    const closeModal = document.getElementById('close-modal');

    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('quick-view-btn')) {
            const id = e.target.getAttribute('data-id');
            const product = productNames[id];
            
            document.getElementById('modal-image').src = `assets/images/product-${id}.jpg`;
            document.getElementById('modal-title').textContent = product.name;
            document.getElementById('modal-category').textContent = product.category;
            document.getElementById('modal-price').textContent = `$${productPrice.toFixed(2)}`;
            document.getElementById('modal-description').textContent = product.desc;
            
            const modalAddBtn = document.getElementById('modal-add-to-cart');
            modalAddBtn.onclick = () => {
                addToCart({ id, name: product.name, price: productPrice });
                modal.classList.remove('open');
            };

            modal.classList.add('open');
        }
    });

    if (closeModal) closeModal.addEventListener('click', () => modal.classList.remove('open'));
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });

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

    const hamburger = document.getElementById('hamburger');
    const navContainer = document.querySelector('.nav-container');
    const cartToggleMobile = document.getElementById('cart-toggle-mobile');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navContainer.classList.toggle('open');
            document.body.style.overflow = navContainer.classList.contains('open') ? 'hidden' : '';
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('open');
            navContainer?.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    if (cartToggle) cartToggle.addEventListener('click', (e) => { e.preventDefault(); openCart(); });
    if (cartToggleMobile) cartToggleMobile.addEventListener('click', (e) => { e.preventDefault(); openCart(); });
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
        showToast(`${product.name} added to cart!`);
        pulseCartCount();
    }

    function showToast(message) {
        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
        
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(20px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    function pulseCartCount() {
        if (cartCountElement) {
            cartCountElement.classList.remove('pulse');
            void cartCountElement.offsetWidth; // Trigger reflow
            cartCountElement.classList.add('pulse');
        }
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

    // --- PayPal Payment Logic ---
    if (document.getElementById('paypal-button-container')) {
        renderPayPalButtons();
    }

    function renderPayPalButtons() {
        paypal.Buttons({
            createOrder: (data, actions) => {
                // Validate form first
                const email = document.getElementById('email').value;
                const firstName = document.getElementById('firstName').value;
                const lastName = document.getElementById('lastName').value;
                const address = document.getElementById('address').value;
                const city = document.getElementById('city').value;
                const zip = document.getElementById('zip').value;

                if (!email || !firstName || !lastName || !address || !city || !zip) {
                    alert('Please fill out all shipping information fields.');
                    return actions.reject();
                }

                const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: total.toFixed(2)
                        },
                        description: "Amity Bead Shop Order"
                    }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    const orderId = details.id;
                    localStorage.setItem('lastOrderId', orderId);
                    localStorage.removeItem('amityCart');
                    window.location.href = 'confirmation.html';
                });
            },
            onError: (err) => {
                console.error('PayPal Error:', err);
                alert('An error occurred during the payment process. Please try again.');
            }
        }).render('#paypal-button-container');
    }
});

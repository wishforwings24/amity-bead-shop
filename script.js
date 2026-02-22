console.log('Welcome to Amity Bead Shop');

document.addEventListener('DOMContentLoaded', () => {
    // --- Product Rendering ---
    const productGrid = document.getElementById('product-grid');
    const totalProducts = 95; 
    const productPrice = 8.00; // Store as number for calc

            const productNames = {
        1: { name: "Aussie DIY Name", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Aussie DIY Name.jpg" },
        2: { name: "Banana Berry", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Banana Berry.jpg" },
        3: { name: "Blue Beige", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Blue Beige.jpg" },
        4: { name: "Blueberry Banana", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Blueberry Banana.jpg" },
        5: { name: "Bow-tiful Blue", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Bow-tiful Blue.jpg" },
        6: { name: "Candy Shop", category: "classic", desc: "A sugary mix of mint, lilac, and peach. Looks good enough to eat (but please don't!)", filename: "Candy Shop.jpg" },
        7: { name: "Chicken Banana", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Chicken Banana.jpg" },
        8: { name: "Cosmic Smiley", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Cosmic Smiley.jpg" },
        9: { name: "Cosmic x2", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Cosmic x2.jpg" },
        10: { name: "Crackle Glass Mix", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Crackle Glass Mix.jpg" },
        11: { name: "Crystal & Natural Wood", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Crystal & Natural Wood.jpg" },
        12: { name: "EXTRA-terrestrial", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "EXTRA-terrestrial.jpg" },
        13: { name: "Elpheba", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Elpheba.jpg" },
        14: { name: "Fancy Bluey", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Fancy Bluey.jpg" },
        15: { name: "Fire", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Fire.jpg" },
        16: { name: "Flower Power", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Flower Power.jpg" },
        17: { name: "Fluro Crush", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Fluro Crush.jpg" },
        18: { name: "Gender Reveal", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Gender Reveal.jpg" },
        19: { name: "Glow in the Dark", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Glow in the Dark.jpg" },
        20: { name: "Gob-Stopper", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Gob-Stopper.jpg" },
        21: { name: "Grape Green", category: "classic", desc: "A burst of summer energy! These translucent green beads capture the essence of vineyard-fresh grapes.", filename: "Grape Green.jpg" },
        22: { name: "Grape Purple", category: "classic", desc: "Rich amethyst-colored beads that add a royal touch to your jewelry collection.", filename: "Grape Purple.jpg" },
        23: { name: "Green Love", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Green Love.jpg" },
        24: { name: "Green Lovey-Dovey", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Green Lovey-Dovey.jpg" },
        25: { name: "Green Pearl x2", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Green Pearl x2.jpg" },
        26: { name: "Green Seed", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Green Seed.jpg" },
        27: { name: "Grey Crazy Clay", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Grey Crazy Clay.jpg" },
        28: { name: "I-Scream-Pink", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "I-Scream-Pink.jpg" },
        29: { name: "ILY Heart", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "ILY Heart.jpg" },
        30: { name: "La-Blue-Bu", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "La-Blue-Bu.jpg" },
        31: { name: "La-Brown-Bu x2", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "La-Brown-Bu x2.jpg" },
        32: { name: "La-Pink-Bu Star", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "La-Pink-Bu Star.jpg" },
        33: { name: "La-Yellow_Bu x2", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "La-Yellow_Bu x2.jpg" },
        34: { name: "Large Peach", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Large Peach.jpg" },
        35: { name: "Lavender", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Lavender.jpg" },
        36: { name: "Lovey-Dovey Peach", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Lovey-Dovey Peach.jpg" },
        37: { name: "Lovey-Dovey Pink Clay", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Lovey-Dovey Pink Clay.jpg" },
        38: { name: "Lovey-Dovey Pink Crystal", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Lovey-Dovey Pink Crystal.jpg" },
        39: { name: "Lovey-Dovey Purple Green", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Lovey-Dovey Purple Green.jpg" },
        40: { name: "Lovey-Dovey Purple", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Lovey-Dovey Purple.jpg" },
        41: { name: "Lucky Fish", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Lucky Fish.jpg" },
        42: { name: "Marble Love", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Marble Love.jpg" },
        43: { name: "Mountain Dew", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Mountain Dew.jpg" },
        44: { name: "Multi Colour Mix", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Multi Colour Mix.jpg" },
        45: { name: "Neon Crush", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Neon Crush.jpg" },
        46: { name: "Neon Party (Choker Necklace)", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Neon Party (Choker Necklace).jpg" },
        47: { name: "Obsidian Large", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Obsidian Large.jpg" },
        48: { name: "Orange Bomb", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Orange Bomb.jpg" },
        49: { name: "Orange Sorbet 1", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Orange Sorbet 1.jpg" },
        50: { name: "Orange Sorbet 2", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Orange Sorbet 2.jpg" },
        51: { name: "Outback", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Outback.jpg" },
        52: { name: "Peach Crazy Clay", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Peach Crazy Clay.jpg" },
        53: { name: "Peach Crazy Mix", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Peach Crazy Mix.jpg" },
        54: { name: "Peach Dreams", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Peach Dreams.jpg" },
        55: { name: "Peaches N Cream", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Peaches N Cream.jpg" },
        56: { name: "Pearl LOVE", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Pearl LOVE.jpg" },
        57: { name: "Pearl x5", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Pearl x5.jpg" },
        58: { name: "Petal", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Petal.jpg" },
        59: { name: "Pink Crazy Clay", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Pink Crazy Clay.jpg" },
        60: { name: "Pink See Through", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Pink See Through.jpg" },
        61: { name: "Pink White Clay", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Pink White Clay.jpg" },
        62: { name: "Pom Pom", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Pom Pom.jpg" },
        63: { name: "Purple & Natural Wood", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Purple & Natural Wood.jpg" },
        64: { name: "Rainbow Fish Scales", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Rainbow Fish Scales.jpg" },
        65: { name: "Rainbow Mix", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Rainbow Mix.jpg" },
        66: { name: "Red Deluxe Large", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Red Deluxe Large.jpg" },
        67: { name: "Rockin' Strawberry", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Rockin' Strawberry.jpg" },
        68: { name: "Royal", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Royal.jpg" },
        69: { name: "See Through Fish", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "See Through Fish.jpg" },
        70: { name: "See Through", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "See Through.jpg" },
        71: { name: "Shiny Blue Mini", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Shiny Blue Mini.jpg" },
        72: { name: "Smiley", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Smiley.jpg" },
        73: { name: "Smoke Show", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Smoke Show.jpg" },
        74: { name: "Space Galaxy", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Space Galaxy.jpg" },
        75: { name: "Sweet Cherry Pie", category: "classic", desc: "Deep red 'cherry' beads paired with crust-colored neutrals. Deliciously charming.", filename: "Sweet Cherry Pie.jpg" },
        76: { name: "Teachers Pet", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Teachers Pet.jpg" },
        77: { name: "Thin Green Mini", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Thin Green Mini.jpg" },
        78: { name: "Valentine Kisses", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Valentine Kisses.jpg" },
        79: { name: "Valentine", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Valentine.jpg" },
        80: { name: "Violet Crumble", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Violet Crumble.jpg" },
        81: { name: "Vitamin C Large", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Vitamin C Large.jpg" },
        82: { name: "Vitamin C Mini", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Vitamin C Mini.jpg" },
        83: { name: "Wicked", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Wicked.jpg" },
        84: { name: "Zesty Pop", category: "classic", desc: "Lime and lemon tones that practically sizzle with citrus energy.", filename: "Zesty Pop.jpg" },
        85: { name: "avo", category: "classic", desc: "Soft avocado tones paired with cream accents for a subtle, earthy look that goes with any outfit.", filename: "avo.jpg" },
        86: { name: "blossom-space", category: "classic", desc: "A cosmic blend of deep purples and flowery pinks, inspired by intergalactic gardens.", filename: "blossom-space.jpg" },
        87: { name: "bombom", category: "classic", desc: "Playful oversized beads in a variety of textures. Unique and bold.", filename: "bombom.jpg" },
        88: { name: "crystal", category: "classic", desc: "Clear as ice, these high-quality glass beads reflect light beautifully from every angle.", filename: "crystal.jpg" },
        89: { name: "la-pink-bu", category: "classic", desc: "Part of our signature 'Bu' collection, featuring soft blush pinks and rose gold spacers.", filename: "la-pink-bu.jpg" },
        90: { name: "neon-citrus", category: "classic", desc: "High-visibility orange and yellow for those who aren't afraid to stand out.", filename: "neon-citrus.jpg" },
        91: { name: "oreo", category: "classic", desc: "A classic black and white contrast that is as sweet and versatile as its namesake.", filename: "oreo.jpg" },
        92: { name: "rainbow-apple", category: "classic", desc: "A fruit-inspired take on our rainbow theme, featuring crisp green and red highlights.", filename: "rainbow-apple.jpg" },
        93: { name: "rainbow", category: "classic", desc: "Every color of the spectrum in one joyful loop. Perfect for making a statement.", filename: "rainbow.jpg" },
        94: { name: "rocky-strawberry", category: "classic", desc: "Stone-textured red beads that look like fresh strawberries picked from a rocky field.", filename: "rocky-strawberry.jpg" },
        95: { name: "trippy-fish", category: "classic", desc: "Psychodelic swirls and oceanic blues make this bracelet a conversation starter.", filename: "trippy-fish.jpg" }
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
                    <img src="assets/images/${p.filename}" alt="${p.name}" class="product-image" loading="lazy">
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
            
            document.getElementById('modal-image').src = `assets/images/${productNames[id].filename}`;
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
                    <img src="assets/images/${productNames[item.id] ? productNames[item.id].filename : 'product-' + item.id + '.jpg'}" alt="${item.name}">
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

    // Checkout Navigation
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast("Your cart is empty.");
                return;
            }
            window.location.href = 'checkout.html';
        });
    }

    // --- Checkout Page Logic ---
    function renderCheckoutSummary() {
        const checkoutItemsContainer = document.getElementById('checkout-items');
        const subtotalEl = document.getElementById('checkout-subtotal');
        const totalEl = document.getElementById('checkout-total');
        
        if (!checkoutItemsContainer) return; // Not on checkout page

        checkoutItemsContainer.innerHTML = '';
        let subtotal = 0;

        if (cart.length === 0) {
            checkoutItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            if (subtotalEl) subtotalEl.textContent = '$0.00';
            if (totalEl) totalEl.textContent = '$0.00';
            return;
        }

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item'; // Reuse styles
            itemEl.style.marginBottom = '15px';
            itemEl.innerHTML = `
                <img src="assets/images/${productNames[item.id] ? productNames[item.id].filename : 'product-' + item.id + '.jpg'}" alt="${item.name}" style="width: 50px; height: 50px; border-radius: 8px;">
                <div class="cart-item-details">
                    <div class="cart-item-title" style="font-size: 0.9rem;">${item.name}</div>
                    <div class="cart-item-price" style="font-size: 0.8rem;">$${item.price.toFixed(2)} x ${item.quantity}</div>
                </div>
                <div style="font-weight: 500;">$${itemTotal.toFixed(2)}</div>
            `;
            checkoutItemsContainer.appendChild(itemEl);
        });

        if (subtotalEl) subtotalEl.textContent = '$' + subtotal.toFixed(2);
        if (totalEl) totalEl.textContent = '$' + subtotal.toFixed(2);
    }

    // Call checkout summary if container exists
    if (document.getElementById('checkout-items')) {
        renderCheckoutSummary();
    }

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

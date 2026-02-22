console.log('Welcome to Amity Bead Shop');

document.addEventListener('DOMContentLoaded', () => {
    // --- Product Rendering ---
    const productGrid = document.getElementById('product-grid');
    const totalProducts = 88; 
    const productPrice = 6.00; // Store as number for calc

                const productNames = {
        1: { name: "Aussie DIY Name", category: "limited", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Aussie DIY Name.jpg" },
        2: { name: "Banana Berry", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Banana Berry.jpg" },
        3: { name: "Blue Beige", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Blue Beige.jpg" },
        4: { name: "Blueberry Banana", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Blueberry Banana.jpg" },
        5: { name: "Bow-tiful Blue", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Bow-tiful Blue.jpg" },
        6: { name: "Candy Shop", category: "vibrant", desc: "A sugary mix of mint, lilac, and peach. Looks good enough to eat (but please don't!)", filename: "Candy Shop.jpg" },
        7: { name: "Chicken Banana", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Chicken Banana.jpg" },
        8: { name: "Cosmic Smiley", category: "limited", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Cosmic Smiley.jpg" },
        9: { name: "Crackle Glass Mix", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Crackle Glass Mix.jpg" },
        10: { name: "Crystal & Natural Wood", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Crystal & Natural Wood.jpg" },
        11: { name: "EXTRA-terrestrial", category: "limited", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "EXTRA-terrestrial.jpg" },
        12: { name: "Elpheba", category: "limited", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Elpheba.jpg" },
        13: { name: "Fancy Bluey", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Fancy Bluey.jpg" },
        14: { name: "Fire", category: "limited", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Fire.jpg" },
        15: { name: "Flower Power", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Flower Power.jpg" },
        16: { name: "Fluro Crush", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Fluro Crush.jpg" },
        17: { name: "Gender Reveal", category: "limited", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Gender Reveal.jpg" },
        18: { name: "Glow in the Dark", category: "limited", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Glow in the Dark.jpg" },
        19: { name: "Gob-Stopper", category: "limited", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Gob-Stopper.jpg" },
        20: { name: "Grape Green", category: "vibrant", desc: "A burst of summer energy! These translucent green beads capture the essence of vineyard-fresh grapes.", filename: "Grape Green.jpg" },
        21: { name: "Grape Purple", category: "vibrant", desc: "Rich amethyst-coloured beads that add a royal touch to your jewellery collection.", filename: "Grape Purple.jpg" },
        22: { name: "Green Love", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Green Love.jpg" },
        23: { name: "Green Lovey-Dovey", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Green Lovey-Dovey.jpg" },
        24: { name: "Green Pearl", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Green Pearl.jpg" },
        25: { name: "Green Seed", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Green Seed.jpg" },
        26: { name: "Grey Crazy Clay", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Grey Crazy Clay.jpg" },
        27: { name: "I-Scream-Pink", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "I-Scream-Pink.jpg" },
        28: { name: "ILY Heart", category: "limited", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "ILY Heart.jpg" },
        29: { name: "La-Blue-Bu", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "La-Blue-Bu.jpg" },
        30: { name: "La-Brown-Bu", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "La-Brown-Bu.jpg" },
        31: { name: "La-Pink-Bu Star", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "La-Pink-Bu Star.jpg" },
        32: { name: "La-Yellow_Bu", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "La-Yellow_Bu.jpg" },
        33: { name: "Large Peach", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Large Peach.jpg" },
        34: { name: "Lavender", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Lavender.jpg" },
        35: { name: "Lovey-Dovey Peach", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Lovey-Dovey Peach.jpg" },
        36: { name: "Lovey-Dovey Pink Clay", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Lovey-Dovey Pink Clay.jpg" },
        37: { name: "Lovey-Dovey Pink Crystal", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Lovey-Dovey Pink Crystal.jpg" },
        38: { name: "Lovey-Dovey Purple Green", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Lovey-Dovey Purple Green.jpg" },
        39: { name: "Lovey-Dovey Purple", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Lovey-Dovey Purple.jpg" },
        40: { name: "Lucky Fish", category: "limited", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Lucky Fish.jpg" },
        41: { name: "Marble Love", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Marble Love.jpg" },
        42: { name: "Mountain Dew", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Mountain Dew.jpg" },
        43: { name: "Multi Colour Mix", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Multi Colour Mix.jpg" },
        44: { name: "Neon Crush", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Neon Crush.jpg" },
        45: { name: "Neon Party (Choker Necklace)", category: "limited", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Neon Party (Choker Necklace).jpg" },
        46: { name: "Obsidian Large", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Obsidian Large.jpg" },
        47: { name: "Orange Bomb", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Orange Bomb.jpg" },
        48: { name: "Orange Sorbet 1", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Orange Sorbet 1.jpg" },
        49: { name: "Orange Sorbet 2", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Orange Sorbet 2.jpg" },
        50: { name: "Outback", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Outback.jpg" },
        51: { name: "Peach Crazy Clay", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Peach Crazy Clay.jpg" },
        52: { name: "Peach Crazy Mix", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Peach Crazy Mix.jpg" },
        53: { name: "Peach Dreams", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Peach Dreams.jpg" },
        54: { name: "Peaches N Cream", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Peaches N Cream.jpg" },
        55: { name: "Pearl LOVE", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Pearl LOVE.jpg" },
        56: { name: "Petal", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Petal.jpg" },
        57: { name: "Pink Crazy Clay", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Pink Crazy Clay.jpg" },
        58: { name: "Pink See Through", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Pink See Through.jpg" },
        59: { name: "Pink White Clay", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Pink White Clay.jpg" },
        60: { name: "Pom Pom", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Pom Pom.jpg" },
        61: { name: "Purple & Natural Wood", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Purple & Natural Wood.jpg" },
        62: { name: "Rainbow Fish Scales", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Rainbow Fish Scales.jpg" },
        63: { name: "Rainbow Mix", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Rainbow Mix.jpg" },
        64: { name: "Red Deluxe Large", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Red Deluxe Large.jpg" },
        65: { name: "Rockin' Strawberry", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Rockin' Strawberry.jpg" },
        66: { name: "Royal", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Royal.jpg" },
        67: { name: "See Through Fish", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "See Through Fish.jpg" },
        68: { name: "See Through", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "See Through.jpg" },
        69: { name: "Shiny Blue Mini", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Shiny Blue Mini.jpg" },
        70: { name: "Smoke Show", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Smoke Show.jpg" },
        71: { name: "Space Galaxy", category: "limited", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Space Galaxy.jpg" },
        72: { name: "Sweet Cherry Pie", category: "vibrant", desc: "Deep red 'cherry' beads paired with crust-coloured neutrals. Deliciously charming.", filename: "Sweet Cherry Pie.jpg" },
        73: { name: "Teachers Pet", category: "limited", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Teachers Pet.jpg" },
        74: { name: "Thin Green Mini", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Thin Green Mini.jpg" },
        75: { name: "Valentine Kisses", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Valentine Kisses.jpg" },
        76: { name: "Valentine", category: "classic", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Valentine.jpg" },
        77: { name: "Violet Crumble", category: "limited", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Violet Crumble.jpg" },
        78: { name: "Vitamin C Large", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Vitamin C Large.jpg" },
        79: { name: "Vitamin C Mini", category: "vibrant", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Vitamin C Mini.jpg" },
        80: { name: "Wicked", category: "limited", desc: "A beautiful handcrafted bead bracelet to add to your collection.", filename: "Wicked.jpg" },
        81: { name: "Zesty Pop", category: "vibrant", desc: "Lime and lemon tones that practically sizzle with citrus energy.", filename: "Zesty Pop.jpg" },
        82: { name: "avo", category: "classic", desc: "Soft avocado tones paired with cream accents for a subtle, earthy look that goes with any outfit.", filename: "avo.jpg" },
        83: { name: "Pom Pom", category: "classic", desc: "Playful oversized beads in a variety of textures. Unique and bold.", filename: "Pom Pom.jpg" },
        84: { name: "la-pink-bu", category: "classic", desc: "Part of our signature 'Bu' collection, featuring soft blush pinks and rose gold spacers.", filename: "la-pink-bu.jpg" },
        85: { name: "neon-citrus", category: "vibrant", desc: "High-visibility orange and yellow for those who aren't afraid to stand out.", filename: "neon-citrus.jpg" },
        86: { name: "oreo", category: "classic", desc: "A classic black and white contrast that is as sweet and versatile as its namesake.", filename: "oreo.jpg" },
        87: { name: "rocky-strawberry", category: "classic", desc: "Stone-textured red beads that look like fresh strawberries picked from a rocky field.", filename: "rocky-strawberry.jpg" },
        88: { name: "Pearl", category: "classic", desc: "Elegant and timeless, the Pearl bracelet features creamy white glass beads that mimic the luster of natural pearls.", filename: "Pearl.jpg" }
    };




    let filteredProducts = [];
    for (let i = 1; i <= totalProducts; i++) {
        const p = productNames[i];
        filteredProducts.push({ id: i, ...p, price: productPrice });
    }

    const PAGE_SIZE = 20;
    let currentPage = 1;
    let currentResults = [];

    function renderPage(products, page, append = false) {
        if (!productGrid) return;

        const start = (page - 1) * PAGE_SIZE;
        const slice = products.slice(start, start + PAGE_SIZE);

        if (!append) {
            productGrid.innerHTML = '';
        }

        // Remove existing Load More button if any
        const existingBtn = document.getElementById('load-more-btn');
        if (existingBtn) existingBtn.remove();

        if (products.length === 0) {
            productGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 50px;"><h3>No products found matching your search.</h3></div>';
            return;
        }

        slice.forEach(p => {
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

        // Add Load More button if there are more products
        if (start + PAGE_SIZE < products.length) {
            const loadMoreWrapper = document.createElement('div');
            loadMoreWrapper.style.cssText = 'grid-column: 1/-1; text-align: center; padding: 20px 0;';
            loadMoreWrapper.innerHTML = `<button id="load-more-btn" class="btn" style="min-width: 200px;">Load More (${products.length - start - PAGE_SIZE} remaining)</button>`;
            productGrid.appendChild(loadMoreWrapper);

            document.getElementById('load-more-btn').addEventListener('click', () => {
                currentPage++;
                renderPage(currentResults, currentPage, true);
            });
        }
    }

    function renderProducts(products) {
        currentResults = products;
        currentPage = 1;
        renderPage(products, 1, false);
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

        const shippingCost = 2.00;
        const finalTotal = subtotal + shippingCost;

        if (subtotalEl) {
            subtotalEl.innerHTML = `
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span>Subtotal:</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px; color: var(--text-muted);">
                    <span>Shipping:</span>
                    <span>$${shippingCost.toFixed(2)}</span>
                </div>
            `;
        }
        if (totalEl) totalEl.textContent = '$' + finalTotal.toFixed(2);
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
                            value: (total + 2.00).toFixed(2)
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

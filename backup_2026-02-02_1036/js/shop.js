// Shopping Cart Functionality
let cart = [];

// Product data
const products = {
    bundle: {
        name: 'help2type Bundle',
        price: 149.00,
        description: '(Tastatur, Schutztasche, Zusatzplatte)'
    },
    keyboard: {
        name: 'help2type Tastatur',
        price: 129.00,
        description: ''
    },
    case: {
        name: 'help2type Schutztasche',
        price: 29.00,
        description: ''
    },
    plate: {
        name: 'help2type Zusatzplatte',
        price: 9.00,
        description: ''
    }
};

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('help2typeCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('help2typeCart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(productId) {
    const product = products[productId];
    
    if (!product) return;
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartDisplay();
    showNotification('Produkt wurde zum Warenkorb hinzugefügt!');
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartDisplay();
        }
    }
}

// Calculate total
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Update cart display
function updateCartDisplay() {
    const cartSummary = document.getElementById('cartSummary');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartSummary || !cartItems || !cartTotal) return;
    
    if (cart.length === 0) {
        cartSummary.style.display = 'none';
        return;
    }
    
    cartSummary.style.display = 'block';
    
    // Build cart items HTML
    let itemsHTML = '';
    cart.forEach(item => {
        itemsHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <strong>${item.name}</strong>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity('${item.id}', -1)" class="qty-btn">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button onclick="updateQuantity('${item.id}', 1)" class="qty-btn">+</button>
                    </div>
                </div>
                <div class="cart-item-price">
                    <span>CHF ${(item.price * item.quantity).toFixed(2)}</span>
                    <button onclick="removeFromCart('${item.id}')" class="remove-btn">✕</button>
                </div>
            </div>
        `;
    });
    
    cartItems.innerHTML = itemsHTML;
    cartTotal.textContent = `CHF ${calculateTotal().toFixed(2)}`;
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
        border-bottom: 1px solid #e0e0e0;
    }
    
    .cart-item-info {
        flex: 1;
    }
    
    .quantity-controls {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
    }
    
    .qty-btn {
        width: 30px;
        height: 30px;
        border: 1px solid #0066cc;
        background: white;
        color: #0066cc;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
        transition: all 0.3s;
    }
    
    .qty-btn:hover {
        background: #0066cc;
        color: white;
    }
    
    .quantity {
        min-width: 30px;
        text-align: center;
        font-weight: bold;
    }
    
    .cart-item-price {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 10px;
    }
    
    .cart-item-price span {
        font-weight: bold;
        color: #0066cc;
    }
    
    .remove-btn {
        background: #dc3545;
        color: white;
        border: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 14px;
        transition: background 0.3s;
    }
    
    .remove-btn:hover {
        background: #c82333;
    }
`;
document.head.appendChild(style);

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    
    // Checkout button handler
    const checkoutBtn = document.querySelector('.btn-checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Ihr Warenkorb ist leer!');
                return;
            }
            
            alert('Vielen Dank für Ihre Bestellung! Sie werden zur Kasse weitergeleitet.');
            // Here you would redirect to a checkout page
            // window.location.href = 'checkout.html';
        });
    }
});

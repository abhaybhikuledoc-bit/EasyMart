// ================================
// EASY MART - ORDER SYSTEM
// ================================
 
// Your working Google Apps Script Web App URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbymElem-LeMsJ6bkkuvYPgpLwKss2Sy_Z8SWuizztncS8tI5krpqpsTOGRLT3rG6aqq/exec";
 
// ================================
// PRODUCTS
// ================================
 
const products = [
 
    {
        id: "EM001",
        name: "Study Table",
 
        price: 309,
        mrp: 499,
 
        images: [
            "images/product-1.jpg",
            "images/product-1-2.jpg",
            "images/product-1-3.jpg"
        ],
 
        image: "images/product-1.jpg",
 
        stock: "In Stock",
 
        description:
            "Simple, strong and useful study table suitable for students, home study and office work.",
 
        specifications: [
            "Material: Engineered Wood",
            "Suitable for: Home, Study & Office",
            "Assembly: Required",
            "Storage: Available",
            "Finish: Wooden Finish"
        ],
 
        size: "Approx. 100 × 50 × 75 cm",
 
        colour: "Brown",
 
        delivery:
            "Delivery available. Estimated delivery will be shown during checkout."
    },
 
    {
        id: "EM002",
        name: "LED Light",
 
        price: 199,
 
        images: [
            "images/product-2.jpg"
        ],
 
        image: "images/product-2.jpg",
 
        stock: "In Stock",
 
        description:
            "Energy-saving LED light."
    },
 
    {
        id: "EM003",
        name: "Kitchen Organizer",
 
        price: 249,
 
        images: [
            "images/product-3.jpg"
        ],
 
        image: "images/product-3.jpg",
 
        stock: "In Stock",
 
        description:
            "Useful kitchen storage organizer."
    },
 
    {
        id: "EM004",
        name: "Mobile Stand",
 
        price: 149,
 
        images: [
            "images/product-4.jpg"
        ],
 
        image: "images/product-4.jpg",
 
        stock: "In Stock",
 
        description:
            "Compact mobile stand."
    }
 
];
 
 
// ================================
// CART
// ================================
 
let cart = [];
 
 
// ================================
// FORMAT PRICE
// ================================
 
function formatPrice(price) {
    return "₹" + Number(price).toLocaleString("en-IN");
}
 
 
// ================================
// DISPLAY PRODUCTS
// ================================
 
function displayProducts() {
 
    const productGrid =
        document.getElementById("productGrid");
 
    productGrid.innerHTML = products.map(product => `
 
        <div class="product-card">
 
            <!-- PRODUCT IMAGES -->
 
            <div class="product-images">
 
                <img
                    id="mainImage-${product.id}"
                    src="${product.images[0]}"
                    alt="${product.name}"
                    class="main-product-image"
                >
 
                ${
                    product.images.length > 1
                    ? `
                    <div class="thumbnail-images">
 
                        ${product.images.map((img, index) => `
 
                            <img
                                src="${img}"
                                alt="${product.name}"
                                class="product-thumbnail"
                                onclick="changeProductImage('${product.id}', ${index})"
                            >
 
                        `).join("")}
 
                    </div>
                    `
                    : ""
                }
 
            </div>
 
 
            <!-- PRODUCT NAME -->
 
            <h3>
                ${product.name}
            </h3>
 
 
            <!-- DESCRIPTION -->
 
            <p class="description">
                ${product.description}
            </p>
 
 
            <!-- STOCK -->
 
            ${
                product.stock
                ? `
                <p class="stock">
                    📦 ${product.stock}
                </p>
                `
                : ""
            }
 
 
            <!-- PRODUCT DETAILS -->
 
            ${
                product.specifications
                ? `
                <div class="product-details">
 
                    <h4>
                        📋 Specifications
                    </h4>
 
                    <ul>
 
                        ${product.specifications
                            .map(spec => `<li>${spec}</li>`)
                            .join("")}
 
                    </ul>
 
                    <p>
                        <strong>📏 Size:</strong>
                        ${product.size || "Not specified"}
                    </p>
 
                    <p>
                        <strong>🎨 Colour:</strong>
                        ${product.colour || "Not specified"}
                    </p>
 
                    <p>
                        <strong>🚚 Delivery:</strong>
                        ${product.delivery || "Delivery information available at checkout."}
                    </p>
 
                </div>
                `
                : ""
            }
 
 
            <!-- PRICE -->
 
            <p class="price">
 
                ${formatPrice(product.price)}
 
                ${
                    product.mrp
                    ? `
                    <span class="mrp">
                        MRP ${formatPrice(product.mrp)}
                    </span>
                    `
                    : ""
                }
 
            </p>
 
 
            <!-- BUTTONS -->
 
            <div class="product-buttons">
 
                <button
                    onclick="addToCart('${product.id}')"
                >
                    Add to Cart
                </button>
 
                <button
                    class="buy-button"
                    onclick="buyNow('${product.id}')"
                >
                    Buy Now
                </button>
 
            </div>
 
        </div>
 
    `).join("");
}
 
 
// ================================
// CHANGE PRODUCT IMAGE
// ================================
 
function changeProductImage(productId, imageIndex) {
 
    const product =
        products.find(p => p.id === productId);
 
    if (
        !product ||
        !product.images ||
        !product.images[imageIndex]
    ) {
        return;
    }
 
    const mainImage =
        document.getElementById(
            "mainImage-" + productId
        );
 
    if (mainImage) {
 
        mainImage.src =
            product.images[imageIndex];
 
    }
}
 
 
// ================================
// ADD TO CART
// ================================
 
function addToCart(productId) {
 
    const product =
        products.find(p => p.id === productId);
 
    if (!product) {
        return;
    }
 
    const existing =
        cart.find(item => item.id === productId);
 
    if (existing) {
 
        existing.quantity++;
 
    } else {
 
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
 
    }
 
    updateCart();
 
    openCart();
}
 
 
// ================================
// BUY NOW
// ================================
 
function buyNow(productId) {
 
    const product =
        products.find(p => p.id === productId);
 
    if (!product) {
        return;
    }
 
    cart = [
 
        {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        }
 
    ];
 
    updateCart();
 
    checkout();
}
 
 
// ================================
// UPDATE CART
// ================================
 
function updateCart() {
 
    const cartCount =
        document.getElementById("cartCount");
 
    const cartItems =
        document.getElementById("cartItems");
 
    const cartTotal =
        document.getElementById("cartTotal");
 
    let totalQuantity = 0;
 
    let totalPrice = 0;
 
 
    if (cart.length === 0) {
 
        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";
 
    } else {
 
        cartItems.innerHTML = cart.map(
            (item, index) => `
 
            <div class="cart-item">
 
                <div>
 
                    <strong>
                        ${item.name}
                    </strong>
 
                    <br>
 
                    ${formatPrice(item.price)}
                    ×
                    ${item.quantity}
 
                </div>
 
                <div>
 
                    <button
                        onclick="changeQuantity(${index}, -1)"
                    >
                        −
                    </button>
 
                    <span>
                        ${item.quantity}
                    </span>
 
                    <button
                        onclick="changeQuantity(${index}, 1)"
                    >
                        +
                    </button>
 
                </div>
 
            </div>
 
        `
        ).join("");
 
    }
 
 
    cart.forEach(item => {
 
        totalQuantity +=
            item.quantity;
 
        totalPrice +=
            item.price * item.quantity;
 
    });
 
 
    cartCount.textContent =
        totalQuantity;
 
    cartTotal.textContent =
        formatPrice(totalPrice);
}
 
 
// ================================
// CHANGE QUANTITY
// ================================
 
function changeQuantity(index, change) {
 
    cart[index].quantity += change;
 
    if (cart[index].quantity <= 0) {
 
        cart.splice(index, 1);
 
    }
 
    updateCart();
}
 
 
// ================================
// OPEN CART
// ================================
 
function openCart() {
 
    updateCart();
 
    document
        .getElementById("cartModal")
        .classList.add("show");
}
 
 
// ================================
// CLOSE CART
// ================================
 
function closeCart() {
 
    document
        .getElementById("cartModal")
        .classList.remove("show");
}
 
 
// ================================
// CHECKOUT
// ================================
 
function checkout() {
 
    if (cart.length === 0) {
 
        alert("Your cart is empty.");
 
        return;
    }
 
    closeCart();
 
 
    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );
 
 
    const productsText =
        cart.map(
            item =>
                `${item.name} × ${item.quantity}`
        ).join(", ");
 
 
    document
        .getElementById("checkoutSummary")
        .innerHTML = `
 
            <p>
 
                <strong>
                    ${productsText}
                </strong>
 
                <br><br>
 
                Total:
 
                <strong>
                    ${formatPrice(total)}
                </strong>
 
            </p>
 
        `;
 
 
    document
        .getElementById("checkoutModal")
        .classList.add("show");
}
 
 
// ================================
// CLOSE CHECKOUT
// ================================
 
function closeCheckout() {
 
    document
        .getElementById("checkoutModal")
        .classList.remove("show");
}
 
 
// ================================
// PLACE ORDER
// ================================
 
document.getElementById("orderForm").addEventListener(
  "submit",
  async function (event) {
 
    event.preventDefault();
 
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
 
    const submitButton = this.querySelector(
      "button[type='submit']"
    );
 
    submitButton.disabled = true;
    submitButton.textContent = "Sending Order...";
 
    const formData = new FormData(this);
 
    // Generate Order ID
    const orderId = "EM" + Date.now();
 
    // Product information
    const product = cart
      .map(item => `${item.name} × ${item.quantity}`)
      .join(", ");
 
    // Total quantity
    const quantity = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
 
    // Total amount
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
 
    // Add order information
    formData.append("orderId", orderId);
    formData.append("product", product);
    formData.append("quantity", quantity);
    formData.append("total", total);
 
    try {
 
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(formData)
      });
 
      // Show success message
      document.getElementById("successOrderId").textContent = orderId;
 
      // Clear cart
      cart = [];
      updateCart();
 
      // Reset form
      this.reset();
 
      closeCheckout();
 
      document
        .getElementById("successModal")
        .classList.add("show");
 
    } catch (error) {
 
      console.error(error);
 
      document
        .getElementById("orderMessage")
        .textContent =
        "❌ Order could not be sent. Please try again.";
 
    } finally {
 
      submitButton.disabled = false;
      submitButton.textContent = "Place Order";
 
    }
  }
);
 
 
// ================================
// SUCCESS POPUP
// ================================
 
function closeSuccess() {
 
    document
        .getElementById("successModal")
        .classList.remove("show");
}
 
 
// ================================
// ORDER TRACKING
// ================================
 
// Keep your existing complete ORDER_TRACKING_URL here
const ORDER_TRACKING_URL =
    "https://script.google.com/macros/s/AKfycbziPi4Hg6wLrsf0vpyMXT8OLO2Se6IgxrtOgKHPjvOc9iB6kJHXgpTKx1JrLjKKi5G__g/exec";
 
 
function openOrderTracking() {
 
    const orderId =
        prompt("Enter your Order ID:");
 
 
    if (!orderId) {
 
        return;
    }
 
 
    fetch(
        ORDER_TRACKING_URL +
        "?orderId=" +
        encodeURIComponent(orderId)
    )
 
    .then(
        response =>
            response.json()
    )
 
    .then(result => {
 
        if (!result.success) {
 
            alert("Order not found.");
 
            return;
        }
 
 
        const order =
            result.order;
 
 
        alert(
 
            "Order ID: " +
            (order["Order ID"] || "") +
 
            "\nCustomer: " +
            (order["Customer Name"] || "") +
 
            "\nProduct: " +
            (order["Product"] || "") +
 
            "\nQuantity: " +
            (order["Quantity"] || "") +
 
            "\nTotal: ₹" +
            (order["Total Amount"] || "") +
 
            "\nPayment: " +
            (order["Payment Method"] || "") +
 
            "\nStatus: " +
            (order["Order Status"] || "") +
 
            "\nTracking: " +
            (order["Tracking Number"] ||
                "Not available")
 
        );
 
    })
 
    .catch(error => {
 
        console.error(error);
 
        alert(
            "Unable to check order status."
        );
 
    });
 
}
 
 
// ================================
// START WEBSITE
// ================================
 
displayProducts();
 
updateCart();

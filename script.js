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
 
        price: 349,
        mrp: 499,
 
        images: [
            "images/product-1.jpg",
        ],
 
        image: "images/product-1.jpg",
 
        stock: "In Stock",
 
        description:
            "Simple, strong and useful study table suitable for students, home study and office work.",
 
        specifications: [
            "Material: Engineered Wood",
            "Suitable for: Kidas Study",
            "Assembly: Not Required",
            "Finish: A to Z alphabet"
        ],
 
        size: "Approx. 100 × 50 × 75 cm",
 
        colour: "Pink & White ",
 
        delivery:
            "Delivery available. Estimated delivery will be shown during checkout."
    },
 
    {
        id: "EM002",
        name: "Body Massager Gun",
 
        price: 549,
        mrp: 699,
 
        images: [
            "images/product-2.jpg"
        ],
 
        image: "images/product-2.jpg",
 
        stock: "In Stock",
  description: "Portable body massage gun designed for relaxation and everyday muscle massage at home, gym or after exercise.",
  specifications: [
    "Type: Electric Massage Gun",
    "Suitable for: Body & Muscle Massage",
    "Operation: Rechargeable/ 5500 Mah Battry",
    "Speed Levels: 6 speed Intensities",
    "Massage Heads: Multiple",
    "Usage: Home, Gym & Travel"
  ],
  size: "Compact & Portable",
  colour: "Black & Multicolor",
  delivery: "Delivery available. Estimated delivery will be shown during checkout."
},
 
    {
        id: "EM003",
        name: "Back Scrubber & Bath Belt for Men & Women",
 
        price: 119,
  mrp: 139,
 
        images: [
            "images/product-3.jpg"
        ],
 
        image: "images/product-3.jpg",
 
        stock: "In Stock",
 
        description: "Double-sided bath scrubber belt designed for easy cleaning and exfoliation of the back and body. Suitable for both men and women.",
  specifications: [
    "Type: Back Scrubber & Bath Belt",
    "Suitable for: Men & Women",
    "Material: Soft & Durable Bath Material",
    "Usage: Bathing & Body Cleaning",
    "Design: Double-Sided Scrubbing Surface",
    "Easy to Hold & Use"
  ],
  size: "Approx. 90 × 10 cm",
  colour: "Multicolour",
  delivery: "Delivery available. Estimated delivery will be shown during checkout."
},
 
    {
        id: "EM004",
        name: "Swing Chair for Baby",
 
         price: 288,
  mrp: 379,
 
        images: [
            "images/product-4.jpg"
        ],
 
        image: "images/product-4.jpg",
 
        stock: "In Stock",
 
        description: "Comfortable cotton swing chair designed for 1-5 Years kids. Suitable for indoor & Outdoor use and supervised play.",
  specifications: [
    "Type: Baby Swing / Cotton Swing Chair",
    "Suitable for: 1-5 Years kids",
    "Material: Cotton",
    "Usage: Indoor & Outdoor",
    "Design: Comfortable & Portable"
  ],
  size: "As per product design",
  colour: "Multicolour",
  delivery: "Delivery available. Estimated delivery will be shown during checkout."
},
 {
  id: "EM005",
  name: "Study Table (Kitty)",
  price: 349,
  mrp: 439,
  images: [
    "images/product-5.jpg"
  ],
  image: "images/product-5.jpg",
  stock: "In Stock",
  description: "Simple, strong and useful foldable and portable study table suitable for students, laptops, home study and office work.",
  specifications: [
    "Material: Engineered Wood & Rubber",
    "Suitable for: Home, Study & Laptop Use",
    "Type: Foldable & Portable",
    "Finish: Wooden Finish"
  ],
  size: "Approx. 100 × 50 × 75 cm",
  colour: "Black/Pink",
  delivery: "Delivery available. Estimated delivery will be shown during checkout."
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
document.getElementById("orderForm")
.addEventListener("submit", async function(event) {
 
  event.preventDefault();
 
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
 
  const submitButton = this.querySelector(
    "button[type='submit']"
  );
 
  const paymentMethod =
    document.getElementById("paymentMethod").value;
 
  const upiTransactionId =
    document.getElementById("upiTransactionId").value.trim();
 
  // ================================
  // UPI PAYMENT CHECK
  // ================================
 
  if (
    paymentMethod === "UPI / Online Payment" &&
    upiTransactionId === ""
  ) {
 
    alert(
      "⚠️ Please complete your UPI payment and enter the UPI Transaction ID before placing the order."
    );
 
    return;
  }
 
  submitButton.disabled = true;
  submitButton.textContent = "Sending Order...";
 
  const formData = new FormData(this);
 
  // ================================
  // GENERATE ORDER ID
  // ================================
 
  const orderId = "EM" + Date.now();
 
  // ================================
  // PRODUCT INFORMATION
  // ================================
 
  const product = cart.map(
    item => `${item.name} × ${item.quantity}`
  ).join(", ");
 
  // ================================
  // TOTAL QUANTITY
  // ================================
 
  const quantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
 
  // ================================
  // TOTAL AMOUNT
  // ================================
 
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
 
  // ================================
  // ADD ORDER INFORMATION
  // ================================
 
  formData.append("orderId", orderId);
  formData.append("product", product);
  formData.append("quantity", quantity);
  formData.append("total", total);
 
  // Add UPI transaction ID
  formData.append(
    "upiTransactionId",
    upiTransactionId
  );
 
  try {
 
    const response = await fetch(
      SCRIPT_URL,
      {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(formData)
      }
    );
 
    // ================================
    // SHOW SUCCESS MESSAGE
    // ================================
 
    document
      .getElementById("successOrderId")
      .textContent = orderId;
 
    // Clear cart
    cart = [];
    updateCart();
 
    // Reset form
    this.reset();
 
    // Hide checkout
    closeCheckout();
 
    // Hide UPI section
    document.getElementById(
      "upiPaymentBox"
    ).style.display = "none";
 
    // Show success popup
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
 
});
 
 
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
// ================================
// UPI PAYMENT
// ================================
 
const paymentMethod = document.getElementById("paymentMethod");
const upiPaymentBox = document.getElementById("upiPaymentBox");
const upiPayButton = document.getElementById("upiPayButton");
 
if (paymentMethod) {
 
  paymentMethod.addEventListener("change", function () {
 
    if (this.value === "UPI / Online Payment") {
 
      upiPaymentBox.style.display = "block";
 
      const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
 
      const upiLink =
        "upi://pay" +
        "?pa=8956802048@ptyes" +
        "&pn=EasyMart" +
        "&am=" + total.toFixed(2) +
        "&cu=INR" +
        "&tn=EasyMart%20Order";
 
      upiPayButton.href = upiLink;
 
    } else {
 
      upiPaymentBox.style.display = "none";
 
      upiPayButton.href = "#";
 
    }
 
  });
 
}

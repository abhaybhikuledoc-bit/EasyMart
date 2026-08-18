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
     displayOrder: 2,
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
     displayOrder: 4,
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
     displayOrder: 5,
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
     displayOrder: 3,
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
  displayOrder: 1,
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
},
 {
    id: "EM006",
    displayOrder: 6,
    name: "Best Bhai Tabletop Standee",
    price: 129,
    mrp: 157,  
 
    images: [
        "images/product-6.jpg",
     "images/product-6.1.jpg",
    ],
 
    image: "images/product-6.jpg",
 
    stock: "In Stock",
 
    description: "Beautiful wooden showpiece suitable for brother gift, home decoration, living room, bedroom, office and gifting.",
 
    specifications: [
        "Material: Wood",
        "Type: Showpiece / Collectible",
        "Net Quantity: 1",
        "Product Length: 6 Inch",
        "Product Height: 6 Inch",
        "Product Breadth: 0.5 Inch",
    ],
 
    size: "6 × 6 × 0.5 Inch",
 
    colour: "As shown in product image",
 
    delivery: "Delivery available. Estimated delivery will be shown during checkout."
},
  {
     id: "EM007",
     displayOrder: 1,
  
     name: "Rakhi for Brother with Printed Ceramic Mug Combo Pack of 3+1 Gift",
  
     price: 248,
     mrp: 287,
  
     images: [
         "images/product-7.jpg",
      "images/product-7.1.jpg",
         "images/product-7.2.jpg"
     ],
  
     image: "images/product-7.jpg",
  
     stock: "In Stock",
 
    description:
        "Beautiful Raksha Bandhan combo gift for brother featuring a stylish Rakhi, printed ceramic mug and greeting card. A perfect gift for celebrating the special bond between brother and sister.",
 
    specifications: [
        "Product Type: Rakhi Gift Combo",
        "Pack: 4 Pieces",
      "Includes: Rakhi + Printed Ceramic Mug + Greeting Card and related Raksha Bandhan items",
        "Material: Ceramic Mug & Thread Rakhi",
        "Colour: Multicolor",
        "Occasion: Raksha Bandhan",
        "Suitable For: Brother"
    ],
 
    size: "Standard size",
    colour: "Multicolor",
 
    delivery:
        "Delivery available. Estimated delivery will be shown during checkout."
},
 {
    id: "EM008",
    displayOrder: 8,
    name: "Gift Combo for Girls",
    price: 299,
    mrp: 499,
 
    images: [
        "images/product-8.jpg",
        "images/product-8.1.jpg"
    ],
 
    image: "images/product-8.jpg",
 
    stock: "In Stock",
 
    description:
        "A special gift combo for Girls . A thoughtful and attractive gifting set for celebrating the bond .",
 
    category: "Gifts",
 
    details: {
        type: "Gift Combo",
      Pack: "8 Pieces",
        contents: "Gift Combo Set",
        warranty: "1 Year",
    }
},
 {
    id: "EM009",
    displayOrder: 9,
 
    name: "Trendy Accessories for Girls – 12 Items Gift Combo",
 
    price: 489,       
    mrp: 599,        
 
    images: [
        "images/product-9.jpg",
        "images/product-9.1.jpg"
    ],
 
    image: "images/product-9.jpg",
 
    stock: "In Stock",
 
    description: `
        Stylish 12-item gifting combo specially curated for girls.
        Perfect for birthdays, surprises and special occasions.
 
        Includes trendy accessories such as hair bow, hair bands,
        butterfly chain pendant, small cluters, earrings, big hair
        cluter, scrunchies, bracelet, keychain, artificial nails,
        anti-tarnish heart chain pendant and necklace.
 
        Colours and designs may vary depending on availability.
    `,
 
    category: "Gift Combo",
    idealFor: "Girls",
    contents: 12,
    warranty: "6 Month",
    Return: "6 to 7 Days"
},
 {
  id: "EM010",
  displayOrder: 10,
 
  name: "Cute Gift Hamper for Girl",
 
  price: 224,
  mrp: 278,   
 
  images: [
    "images/product-10.jpg",
    "images/product-10.1.jpg",
   "images/product-10.2.jpg"
  ],
 
  image: "images/product-10.jpg",
 
  stock: "In Stock",
 
  category: "Gifts & Accessories",
  type: "Girl Accessories",
 
  material: "Fabric",
  size: "Free Size",
  quantity: 1,
 
  description:
    "Premium Gift Combo for Girls featuring a stylish necklace, earrings, bracelet, satin scrunchie, clutcher, hair bow and teddy keychain.A beautiful and thoughtful gift set for birthdays, celebrations and special occasions. Colours and designs may vary depending on availability.",
 
  features: [
     "Premium Necklace",
  "Premium Pair of Earrings",
  "Premium Bracelet",
  "Premium Satin Scrunchie",
  "Premium Clutcher",
  "Premium Hair Bow",
  "Premium Teddy Keychain",
  "Perfect for gifting",
    "Elegant and trendy design",
    "Suitable for gifting",
  ]
  },
 {
        id: "EM011",
     displayOrder: 11,
        name: "Diva Elegant Rakhi-Set of 3",
 
        price: 233,
        mrp: 265,
 
        images: [
            "images/product-11.jpg",
          "images/product-11.1.jpg"
        ],
 
        image: "images/product-11.jpg",
 
        stock: "In Stock",
  description: "3 set of Rakhi Fancy design| Rakhi Gift For Brother/Sister | Best Rakhi For Bhai | Stylish Rakhi Set| New Fancy Rakhi Combo.",
  specifications: [
    "Type: Rakhi Set",
    "Material: Alloy",
    "Quantity: 3 Rakhis"
  ],
  size: "Free Size",
  colour: "Multicolor",
  delivery: "Delivery available. Estimated delivery will be shown during checkout."
},
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
 
    const productGrid = document.getElementById("productGrid");
 
    productGrid.innerHTML = [...products]
        .sort((a, b) => a.displayOrder - b.displayOrder)
        .map(product => `
 
        <div class="product-card">
 
            <!-- PRODUCT IMAGES -->
 
            <div class="product-images">
 
                <div class="image-slider"
                     id="slider-${product.id}">
 
                    <div class="slider-track">
 
                        ${product.images.map((img, index) => `
                            <img
                                  src="${img}"
    alt="${product.name}"
    class="slider-image"
    onclick="openImageViewer('${product.id}', ${index})">
                        `).join("")}
 
                    </div>
 
                    ${
                        product.images.length > 1
                        ? `
 
                        <button
                            class="slider-arrow slider-prev"
                            onclick="changeSlide('${product.id}', -1)">
                            ‹
                        </button>
 
                        <button
                            class="slider-arrow slider-next"
                            onclick="changeSlide('${product.id}', 1)">
                            ›
                        </button>
 
                        <div class="slider-dots">
 
                            ${product.images.map((img, index) => `
 
                                <span
                                    class="slider-dot ${index === 0 ? "active" : ""}"
                                    onclick="goToSlide('${product.id}', ${index})">
                                </span>
 
                            `).join("")}
 
                        </div>
 
                        `
                        : ""
                    }
 
                </div>
 
            </div>
 
 
            <!-- PRODUCT NAME -->
 
            <h3>
                ${product.name}
            </h3>
 
 
            <!-- DESCRIPTION -->
 
            <p class="description">
                ${product.description || ""}
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
 
                        <h4>📋 Specifications</h4>
 
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
                    onclick="addToCart('${product.id}')">
                    Add to Cart
                </button>
 
                <button
                    class="buy-button"
                    onclick="buyNow('${product.id}')">
                    Buy Now
                </button>
 
            </div>
 
        </div>
 
    `)
    .join("");
 
    // Start image sliders AFTER products are created
    initializeSliders();
    enableSwipe();
}
 
 
// ================================
// IMAGE SLIDER
// ================================
 
let sliderPositions = {};
 
 
// ================================
// INITIALIZE SLIDERS
// ================================
 
function initializeSliders() {
 
    products.forEach(product => {
 
        sliderPositions[product.id] = 0;
 
    });
 
}
 
 
// ================================
// CHANGE SLIDE
// ================================
 
function changeSlide(productId, direction) {
 
    const product = products.find(
        p => p.id === productId
    );
 
    if (!product) {
        return;
    }
 
    let position =
        sliderPositions[productId] || 0;
 
    position += direction;
 
    if (position < 0) {
 
        position =
            product.images.length - 1;
 
    }
 
    if (position >= product.images.length) {
 
        position = 0;
 
    }
 
    sliderPositions[productId] = position;
 
    updateSlider(productId);
 
}
 
 
// ================================
// GO TO SPECIFIC SLIDE
// ================================
 
function goToSlide(productId, index) {
 
    sliderPositions[productId] = index;
 
    updateSlider(productId);
 
}
 
 
// ================================
// UPDATE SLIDER
// ================================
 
function updateSlider(productId) {
 
    const slider =
        document.getElementById(
            "slider-" + productId
        );
 
    if (!slider) {
        return;
    }
 
    const position =
        sliderPositions[productId] || 0;
 
    const track =
        slider.querySelector(
            ".slider-track"
        );
 
    if (track) {
 
        track.style.transform =
            `translateX(-${position * 100}%)`;
 
    }
 
    const dots =
        slider.querySelectorAll(
            ".slider-dot"
        );
 
    dots.forEach((dot, index) => {
 
        dot.classList.toggle(
            "active",
            index === position
        );
 
    });
 
}
 
 
// ================================
// MOBILE SWIPE
// ================================
 
function enableSwipe() {
 
    document
        .querySelectorAll(".image-slider")
        .forEach(slider => {
 
            let startX = 0;
            let endX = 0;
 
 
            // Finger touches screen
 
            slider.addEventListener(
                "touchstart",
                function(event) {
 
                    startX =
                        event.touches[0].clientX;
 
                }
            );
 
 
            // Finger leaves screen
 
            slider.addEventListener(
                "touchend",
                function(event) {
 
                    endX =
                        event.changedTouches[0].clientX;
 
                    const productId =
                        slider.id.replace(
                            "slider-",
                            ""
                        );
 
 
                    // Swipe LEFT
                    // Next image
 
                    if (
                        startX - endX > 50
                    ) {
 
                        changeSlide(
                            productId,
                            1
                        );
 
                    }
 
 
                    // Swipe RIGHT
                    // Previous image
 
                    if (
                        endX - startX > 50
                    ) {
 
                        changeSlide(
                            productId,
                            -1
                        );
 
                    }
 
                }
            );
 
        });
 
}
// ================================
// FULL SCREEN IMAGE VIEWER
// ================================
 
let viewerProductId = null;
let viewerImageIndex = 0;
 
 
// ================================
// OPEN IMAGE VIEWER
// ================================
 
function openImageViewer(productId, index) {
 
    const product = products.find(
        p => p.id === productId
    );
 
    if (!product) {
        return;
    }
 
    viewerProductId = productId;
    viewerImageIndex = index;
 
    updateImageViewer();
 
    document
        .getElementById("imageViewer")
        .classList.add("show");
}
 
 
// ================================
// UPDATE VIEWER IMAGE
// ================================
 
function updateImageViewer() {
 
    const product = products.find(
        p => p.id === viewerProductId
    );
 
    if (!product) {
        return;
    }
 
    const viewerImage =
        document.getElementById("viewerImage");
 
    const viewerCounter =
        document.getElementById("viewerCounter");
 
    viewerImage.src =
        product.images[viewerImageIndex];
 
    viewerCounter.textContent =
        (viewerImageIndex + 1) +
        " / " +
        product.images.length;
}
 
 
// ================================
// CHANGE VIEWER IMAGE
// ================================
 
function viewerChangeImage(direction) {
 
    const product = products.find(
        p => p.id === viewerProductId
    );
 
    if (!product) {
        return;
    }
 
    viewerImageIndex += direction;
 
    if (viewerImageIndex < 0) {
        viewerImageIndex =
            product.images.length - 1;
    }
 
    if (
        viewerImageIndex >=
        product.images.length
    ) {
        viewerImageIndex = 0;
    }
 
    updateImageViewer();
}
 
 
// ================================
// CLOSE IMAGE VIEWER
// ================================
 
function closeImageViewer() {
 
    document
        .getElementById("imageViewer")
        .classList.remove("show");
 
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

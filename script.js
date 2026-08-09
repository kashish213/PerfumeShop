// ================= CART =================
// This is scrip.js file

let cartCount = Number(localStorage.getItem("cartCount")) || 0;

document.addEventListener("DOMContentLoaded", function () {
    updateCart();
    loadTheme();
});

function updateCart() {
    const cart = document.getElementById("cartCount");

    if (cart) {
        cart.textContent = cartCount;
    }
}

function addToCart(productName) {

    cartCount++;

    localStorage.setItem("cartCount", cartCount);

    updateCart();

    alert(productName + " added to your cart! 🛍️");
}

function showCart() {

    if (cartCount === 0) {
        alert("Your cart is empty. Add some beautiful perfumes! 🌸");
    } else {
        alert("You have " + cartCount + " item(s) in your cart. 🛍️");
    }
}


// ================= WISHLIST =================

function addWishlist(button) {

    button.classList.toggle("liked");

    if (button.classList.contains("liked")) {
        button.textContent = "♥";
    } else {
        button.textContent = "♡";
    }
}


// ================= DARK / LIGHT MODE =================

function toggleTheme() {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem("darkMode", isDark);

    updateThemeButton();
}

function loadTheme() {

    const darkMode = localStorage.getItem("darkMode");

    if (darkMode === "true") {
        document.body.classList.add("dark");
    }

    updateThemeButton();
}

function updateThemeButton() {

    const buttons = document.querySelectorAll(".theme-toggle");

    const isDark = document.body.classList.contains("dark");

    buttons.forEach(function (button) {

        if (isDark) {
            button.textContent = "☀️";
            button.title = "Light Mode";
        } else {
            button.textContent = "🌙";
            button.title = "Dark Mode";
        }

    });
}


// ================= SIGN UP =================

function signUp(event) {

    event.preventDefault();

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account created successfully! 💖");

    window.location.href = "signin.html";
}


// ================= SIGN IN =================

function signIn(event) {

    event.preventDefault();

    const email = document.getElementById("signinEmail").value;
    const password = document.getElementById("signinPassword").value;

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (!savedEmail) {
        alert("No account found. Please create an account first.");
        return;
    }

    if (email === savedEmail && password === savedPassword) {

        localStorage.setItem("loggedIn", "true");

        alert("Welcome back! 🌸");

        window.location.href = "index.html";

    } else {

        alert("Invalid email or password!");

    }
}


// ================= CONTACT FORM =================

function contactForm(event) {

    event.preventDefault();

    const name = document.getElementById("contactName").value;

    alert(
        "Thank you, " +
        name +
        "! 💌 Your message has been sent successfully."
    );

    event.target.reset();
}
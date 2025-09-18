// ==============================
// PART 1: EVENT HANDLING
// ==============================

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let counter = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("increaseBtn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// ==============================
// PART 2: INTERACTIVE ELEMENTS
// ==============================

// Collapsible FAQ
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const parent = question.parentElement;
    parent.classList.toggle("active");
  });
});

// ==============================
// PART 3: FORM VALIDATION
// ==============================
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("formSuccess");

function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
}

function clearError(input) {
  const error = input.nextElementSibling;
  error.textContent = "";
}

function validateEmail(email) {
  // Simple regex pattern
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    isValid = false;
  } else {
    clearError(nameInput);
  }

  // Email validation
  if (!validateEmail(emailInput.value)) {
    showError(emailInput, "Enter a valid email");
    isValid = false;
  } else {
    clearError(emailInput);
  }

  // Password validation (min 6 chars)
  if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
    isValid = false;
  } else {
    clearError(passwordInput);
  }

  if (isValid) {
    successMessage.textContent = "🎉 Form submitted successfully!";
    form.reset();
  } else {
    successMessage.textContent = "";
  }
});

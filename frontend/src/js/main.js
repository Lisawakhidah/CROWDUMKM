// main.js

// Example function to validate a form
function validateForm() {
  const name = document.querySelector("input[type='text']").value;
  const phone = document.querySelector("input[type='text']").value;
  const email = document.querySelector("input[type='text']").value;
  const message = document.querySelector("textarea").value;

  if (!name || !phone || !email || !message) {
    alert("All fields must be filled out!");
    return false;
  } else {
    alert("Form is validated!");
    return true;
  }
}

// Example event listener for the contact form submit button
document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.querySelector("button.bg-yellow-500");

  if (contactButton) {
    contactButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the form from submitting
      validateForm();
    });
  }

  console.log("JavaScript file loaded and ready");
});

// Example function to dynamically change navbar background color on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-blue-900");
  } else {
    navbar.classList.remove("bg-blue-900");
  }
});

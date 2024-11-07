document.addEventListener("DOMContentLoaded", function () {
  const selectedCourse = JSON.parse(localStorage.getItem("selectedCourse"));
  const courseInfo = document.getElementById("selectedCourse");

  // Display selected course information
  if (selectedCourse) {
    courseInfo.textContent = `You are purchasing "${selectedCourse.title}" for ${selectedCourse.price}.`;
  } else {
    courseInfo.textContent = "No course selected. Please go back and choose a course.";
  }

  const paymentForm = document.getElementById("paymentForm");
  const paymentMethod = document.getElementById("paymentMethod");
  const verificationSection = document.getElementById("verificationSection");
  const verificationCode = document.getElementById("verificationCode");

  // Show verification code section based on payment method
  paymentMethod.addEventListener("change", function () {
    if (paymentMethod.value) {
      verificationSection.style.display = "block";
    } else {
      verificationSection.style.display = "none";
    }
  });

  // Handle form submission and verification
  paymentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Check if the verification code is correct
    if (verificationCode.value === "1234") {
      alert("Payment successful! Thank you for your purchase.");
      localStorage.removeItem("selectedCourse"); // Clear the selected course from localStorage
      window.location.href = "index.html"; // Redirect to the home page
    } else {
      alert("Incorrect verification code. Please try again.");
    }
  });
});

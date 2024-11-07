document.addEventListener("DOMContentLoaded", function () {
  // Mock discounted courses data
  const courses = [
    { id: 1, title: "JavaScript Basics", discount: "20%", price: "$20" },
    { id: 2, title: "React Fundamentals", discount: "35%", price: "$50" },
    { id: 3, title: "CSS Mastery", discount: "40%", price: "$30" },
  ];

  // Display courses dynamically in the "course-list" div
  const courseList = document.getElementById("course-list");
  courses.forEach(course => {
    const courseItem = document.createElement("div");
    courseItem.classList.add("course-item");
    courseItem.innerHTML = `
      <h3>${course.title}</h3>
      <p>Discount: ${course.discount}</p>
      <p>Price: ${course.price}</p>
      <button onclick="selectCourse(${course.id}, '${course.title}', '${course.price}')">Select Course</button>
    `;
    courseList.appendChild(courseItem);
  });

  // Function to handle course selection
  window.selectCourse = function (id, title, price) {
    // Store selected course details in localStorage
    localStorage.setItem("selectedCourse", JSON.stringify({ id, title, price }));
    // Redirect to the payment page
    window.location.href = "pay.html";
  };
});

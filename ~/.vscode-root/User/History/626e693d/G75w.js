document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Dark Mode Toggle
    const toggleButton = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    // Function to toggle dark mode
    function toggleDarkMode() {
        body.classList.toggle("dark-mode");

        // Change button icon
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeIcon.textContent = "🌙";
        } else {
            localStorage.setItem("theme", "light");
            themeIcon.textContent = "🌞";
        }
    }

    // Load saved theme preference on page load
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeIcon.textContent = "🌙"; // Set icon correctly on page load
    }

    // Ensure button is clickable
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleDarkMode);
    }
});

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
    const body = document.body;

    // Function to toggle dark mode
    function toggleDarkMode() {
        body.classList.toggle("dark-mode");

        // Save preference in localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    }

    // Load saved theme preference on page load
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    // Event listener for toggle button
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleDarkMode);
    }
});

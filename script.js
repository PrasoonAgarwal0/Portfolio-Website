document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Dark Mode Toggle
    const toggleBtn = document.createElement("button");
    const toggleIcon = document.createElement("i");
    toggleIcon.classList.add("fa", "fa-moon");
    toggleBtn.appendChild(toggleIcon);
    toggleBtn.classList.add("dark-mode-toggle");
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", toggleDarkMode);

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            toggleIcon.classList.replace("fa-moon", "fa-sun");
        } else {
            toggleIcon.classList.replace("fa-sun", "fa-moon");
        }
    }

    // Position the toggle button at the upper right corner
    toggleBtn.style.position = "fixed";
    toggleBtn.style.top = "10px";
    toggleBtn.style.right = "10px";
    toggleBtn.style.background = "transparent";
    toggleBtn.style.border = "none";
    toggleBtn.style.cursor = "pointer";
    toggleBtn.style.fontSize = "1.5rem";
    toggleBtn.style.color = "white";
    toggleBtn.style.zIndex = "1000";

    // Smooth Scroll for Navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Dynamic Greeting Based on Time
    function dynamicGreeting() {
        const greetingElement = document.createElement("h2");
        const currentHour = new Date().getHours();
        let greeting;
        if (currentHour < 12) {
            greeting = "Good Morning!";
        } else if (currentHour < 18) {
            greeting = "Good Afternoon!";
        } else {
            greeting = "Good Evening!";
        }
        greetingElement.textContent = greeting;
        document.getElementById("about").prepend(greetingElement);
    }
    dynamicGreeting();
});
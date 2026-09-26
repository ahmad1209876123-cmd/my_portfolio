document.addEventListener("DOMContentLoaded", () => {

    /* ---------- Load Navbar Component ---------- */

    const navbarContainer = document.getElementById("navbar");

    if (navbarContainer) {

        fetch("components/navbar.html")
            .then(response => response.text())
            .then(data => {

                navbarContainer.innerHTML = data;

                /* ---------- Mobile Menu ---------- */

                const menuToggle = document.querySelector(".menu-toggle");
                const navMenu = document.querySelector(".nav-menu");

                if (menuToggle && navMenu) {

                    menuToggle.addEventListener("click", () => {

                        navMenu.classList.toggle("active");

                        const icon = menuToggle.querySelector("i");

                        if (navMenu.classList.contains("active")) {
                            icon.classList.remove("fa-bars");
                            icon.classList.add("fa-xmark");
                        } else {
                            icon.classList.remove("fa-xmark");
                            icon.classList.add("fa-bars");
                        }

                    });

                }

                /* ---------- Close Menu After Link Click ---------- */

                const navLinks = document.querySelectorAll(".nav-menu a");

                navLinks.forEach(link => {

                    link.addEventListener("click", () => {

                        navMenu.classList.remove("active");

                        const icon = menuToggle.querySelector("i");

                        if (icon) {
                            icon.classList.remove("fa-xmark");
                            icon.classList.add("fa-bars");
                        }

                    });

                });

            })
            .catch(error => {
                console.error("Navbar could not be loaded:", error);
            });

    }

});


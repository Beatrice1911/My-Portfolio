document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const icon = document.querySelector(".menu-icon i");
    const mobileMenu = document.querySelector(".mobile-menu");

    menuIcon.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");

            if (icon.classList.contains("fa-bars-staggered")) {
                icon.classList.remove("fa-bars-staggered");
                icon.classList.add("fa-close");
            } else {
                icon.classList.remove("fa-close");
                icon.classList.add("fa-bars-staggered");
            }

            menuIcon.style.transform = "rotate(180deg)";
            setTimeout(() => {
                menuIcon.style.transform = "rotate(0)";
            }, 300);

    });
});

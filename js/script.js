
const linkInicio = document.querySelector('a[href="#home"]');
const textoHome = document.querySelector('.hero-texto');

linkInicio.addEventListener("click", () => {
    setTimeout(() => {
        textoHome.classList.add("mostrar-home");
    }, 200);
});




document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("show");
        });
    }

    const elements = document.querySelectorAll(".hidden");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("mostrar");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });

        elements.forEach((el) => observer.observe(el));
    } else {
        elements.forEach((el) => el.classList.add("mostrar"));
    }
});






document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("show");
        });
    }

    const elements = document.querySelectorAll(".hidden");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("mostrar");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });

        elements.forEach((el) => observer.observe(el));
    } else {
        elements.forEach((el) => el.classList.add("mostrar"));
    }

    const textoHome = document.querySelector(".hero-texto");

    if (textoHome) {
        setTimeout(() => {
            textoHome.classList.add("mostrar-home");
        }, 400);
    }
});

const heroBox = document.querySelector(".hero-left");

if (heroBox) {
    setTimeout(() => {
        heroBox.classList.add("show-left");
    }, 300);
}



document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const linkInicio = document.querySelector('a[href="#home"]');
    const textoHome = document.querySelector(".hero-texto");
    const elements = document.querySelectorAll(".hidden");

    // Menu hambúrguer
    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("show");
        });

        // Fecha o menu ao clicar em uma opção
        menu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                menu.classList.remove("show");
            });
        });
    }

    // Texto da home
    if (linkInicio && textoHome) {
        linkInicio.addEventListener("click", () => {
            setTimeout(() => {
                textoHome.classList.add("mostrar-home");
            }, 200);
        });

        setTimeout(() => {
            textoHome.classList.add("mostrar-home");
        }, 400);
    }

    // Animação dos cards
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
/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

});


/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");

    });

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* ================= SCROLL REVEAL ================= */

const revealItems = document.querySelectorAll(
    ".glass-card, .skill-card, .project-card"
);


const observer = new IntersectionObserver(
    (entries, obs) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                obs.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(18px)";

    item.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(item);

});
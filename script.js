// ================================
// MOBILE MENU
// ================================

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ================================
// NAVBAR SHADOW ON SCROLL
// ================================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.3)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ================================
// SIMPLE SCROLL REVEAL
// ================================

const cards =
    document.querySelectorAll(
        ".skill-card, .project-card, .timeline-item"
    );


function revealCards() {

    cards.forEach(function (card) {

        const position =
            card.getBoundingClientRect().top;

        const screenPosition =
            window.innerHeight - 100;

        if (position < screenPosition) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "all 0.7s ease";

});


window.addEventListener(
    "scroll",
    revealCards
);

revealCards();
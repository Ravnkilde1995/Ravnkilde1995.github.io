//  scroll section active link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

// toggle icon navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

// project slider
const projectContainer = document.querySelector('.project-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
    
        if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove("active");
            document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
        });
        };
    });

    //  sticky navbar
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // remove toggle icon and toggled navbar when click (scroll)
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
    const containerWidth = projectContainer.offsetWidth;
    scrollAmount += containerWidth;
    if (scrollAmount >= projectContainer.scrollWidth) {
        scrollAmount = 0; // Gå tilbage til starten
    }
    projectContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener('click', () => {
    const containerWidth = projectContainer.offsetWidth;
    scrollAmount -= containerWidth;
    if (scrollAmount < 0) {
        scrollAmount = projectContainer.scrollWidth - containerWidth; // Gå til slutningen
    }
    projectContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

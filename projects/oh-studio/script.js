const navLinks = document.querySelectorAll("header nav a");
const sectionLinks = document.querySelectorAll(".section-nav a");


navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        event.target.classList.add('active');
    });
});

sectionLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        sectionLinks.forEach(nav => nav.classList.remove('active'));
        event.target.classList.add('active');
    });
});

const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => {

    const sections = Array.from(document.getElementsByClassName('section'));

    for (let section of sections) {
        observer.observe(section);
    }

});
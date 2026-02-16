/* Toggle Icon Navbar */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Scroll Sections Active Link */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            const target = document.querySelector('header nav a[href*="' + CSS.escape(id) + '"]');
            if (target) target.classList.add('active');
        }
    });

    /* Sticky Navbar */
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Close mobile nav on scroll */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* Scroll Reveal */
ScrollReveal({
    distance: '60px',
    duration: 1500,
    delay: 150,
    easing: 'ease-out'
});

ScrollReveal().reveal('.home-content .greeting', { origin: 'top', delay: 100 });
ScrollReveal().reveal('.home-content h1', { origin: 'left', delay: 200 });
ScrollReveal().reveal('.home-content .typed-wrap', { origin: 'right', delay: 300 });
ScrollReveal().reveal('.home-content p', { origin: 'bottom', delay: 400 });
ScrollReveal().reveal('.home-content .social-media', { origin: 'bottom', delay: 500 });
ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.section-subtitle', { origin: 'top', delay: 100 });
ScrollReveal().reveal('.about-content h3, .about-content > p', { origin: 'bottom', interval: 150 });
ScrollReveal().reveal('.info-item', { origin: 'bottom', interval: 100 });
ScrollReveal().reveal('.resume-content', { origin: 'bottom', interval: 150 });
ScrollReveal().reveal('.portfolio-card', { origin: 'bottom', interval: 100 });
ScrollReveal().reveal('.contact-card', { origin: 'bottom' });

/* Typed.js */
const typed = new Typed('.multiple-text', {
    strings: ['Balance Designer', 'System Planner', 'Data-Driven Thinker'],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
});

'use strict';

// Navbar color change based on a section background color

const header = document.querySelector("header");
const work = document.querySelector("#work");
const contact = document.querySelector("#contact");

const sectionOptions = {
    rootMargin: '0px 0px -95% 0px',
};

const workSectionObserver = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            header.classList.remove('scrolled');
        } else {
            header.classList.add('scrolled')
        }
    })
},sectionOptions);

workSectionObserver.observe(work);

const contactSectionObserver = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            header.classList.remove('scrolled');
        } else {
            header.classList.add('scrolled')
        }
    })
},sectionOptions);

contactSectionObserver.observe(contact);

// Animations

const workText = document.querySelector('#work-header h1');

const options = {
    rootMargin: '0px 0px -15% 0px'
}

const workTextObserver = new IntersectionObserver((entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            workText.style.animation = 'work 3000ms ease-in-out';
            workText.style.animationFillMode = 'forwards';
        }
    })
}),options);

workTextObserver.observe(workText);

const aboutText = document.querySelector('#about-header svg text');

const aboutTextObserver = new IntersectionObserver((entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutText.style.animation = 'dash 5000ms ease-out';
            aboutText.style.animationFillMode = 'forwards';
        }
    })
}));

aboutTextObserver.observe(aboutText);



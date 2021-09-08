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



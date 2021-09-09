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

// Work
const workText = document.querySelector('#work-header h1');

const options = {
    rootMargin: '0px 0px -25% 0px'
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


// Parallax
const parallax = document.querySelector('#parallax-window');
const about = document.querySelector('#about-content svg text')

const parallaxOptions = {
    rootMargin: '0px 0px -50% 0px'
}

const parallaxWindowObserver = new IntersectionObserver((entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            about.style.animation = 'dash 2000ms ease';
            about.style.animationFillMode = 'forwards';
        }
        console.log(entry.intersectionRatio)
    })
}),parallaxOptions);

parallaxWindowObserver.observe(parallax);

// Form validation and submitting

const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault()
})



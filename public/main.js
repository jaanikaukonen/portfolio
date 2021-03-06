'use strict';

// Navbar color change based on a section background color

const header = document.querySelector("header");
const work = document.querySelector("#work");
const contact = document.querySelector("#contact");

// Scroll down indicator

const div = document.querySelector('#scroll-indicator');
setTimeout(() => {
    div.style.display = 'flex';
}, 6500);

const sectionOptions = {
    rootMargin: '0px 0px -95% 0px',
};

const workSectionObserver = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            header.classList.remove('scrolled');
        } else {
            header.classList.add('scrolled')
            if (div.style.display === 'flex') {
                div.style.display = 'none';
            }
        }
    })
}, sectionOptions);

workSectionObserver.observe(work);

const contactSectionObserver = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            header.classList.remove('scrolled');
        } else {
            header.classList.add('scrolled')
        }
    })
}, sectionOptions);

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
}), options);

workTextObserver.observe(workText);


// Parallax
const parallax = document.querySelector('#parallax-window');
const aboutLetters = document.querySelectorAll('.letter');
const about = document.querySelector('#about');


// About text animation
const parallaxOptions = {
    rootMargin: '0px 0px -60% 0px'
}

const parallaxWindowObserver = new IntersectionObserver((entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log('Observing')
            aboutLetters.forEach(letter => {
                letter.style.animation = 'dash 3500ms ease';
                letter.style.animationFillMode = 'forwards';
            });
            setTimeout(() => {
                aboutLetters.forEach(letter => {
                    letter.style.animation = 'none';
                    letter.style.strokeDashoffset = '0';
                });
                parallaxWindowObserver.unobserve(parallax);
            },3500);
        }
    })
}), parallaxOptions);

parallaxWindowObserver.observe(parallax);


// About section
const aboutOptions = {
    rootMargin: '0px 0px 0px 0px'
}

const aboutObserver = new IntersectionObserver((entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            about.style.display = 'block';
        } else {
            about.style.display = 'none';
        }
    })
}), aboutOptions);

aboutObserver.observe(parallax);



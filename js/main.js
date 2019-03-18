// Smooth Scroll applied to the navbar

const scroll = new SmoothScroll('.navigation-bar a[href*="#"]', {
    speed: 800
});

// Applying white background and shadow to the navigation bar

let navigationBar = document.querySelector('.main-header');
let siteLogo = document.querySelector('.logo');
let ulContainer = document.querySelector('.list-container');
let mainHeaderLogo = document.querySelector('.logo a');

window.addEventListener('scroll', function(e) {
    e.preventDefault();

    const lastPosition = window.scrollY;

    if (lastPosition > 50 ) {
        navigationBar.classList.add('shadow-effect');
        navigationBar.classList.add('navigation-scroll');
        navigationBar.style.height = "60px";
        siteLogo.style.margin = "15px 0px";
        ulContainer.style.margin = "16px 0px";
        mainHeaderLogo.style.color = "#1A3F92";
    } else if (navigationBar.classList.contains('shadow-effect')) {
        navigationBar.classList.remove('shadow-effect');
        navigationBar.classList.remove('navigation-scroll');
        navigationBar.style.height = "80px";
        siteLogo.style.margin = "24px 0px";
        mainHeaderLogo.style.color = "#5D90FF";
    } else {
        navigationBar.classList.remove('shadow-effect');
        navigationBar.classList.remove('navigation-scroll');
        navigationBar.style.height = "80px";
        siteLogo.style.margin = "24px 0px";
        mainHeaderLogo.style.color = "#5D90FF";
    }
});
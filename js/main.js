// Smooth Scroll applied to the navbar

const scroll = new SmoothScroll('.navigation-bar a[href*="#"]', {
    speed: 800
});


// Applying effects to the navigation bar when scrolled and clicked

let navigationBar = document.querySelector('.main-header');
let siteLogo = document.querySelector('.logo');
let ulContainer = document.querySelector('.list-container');
let listContainer = document.querySelectorAll('.list-container li a');
let mainHeaderLogo = document.querySelector('.logo a');

window.addEventListener('scroll', function(e) {

    const lastPosition = window.scrollY;
    // When window is scrolled
    if (lastPosition > 50 ) {
        navigationBar.classList.add('shadow-effect');
        navigationBar.classList.add('navigation-scroll');
        navigationBar.style.height = "60px";
        siteLogo.style.margin = "15px 0px";
        ulContainer.style.margin = "16px 0px";
        mainHeaderLogo.style.color = "#1A3F92";

        for (let i = 0; i < listContainer.length; i++){
            listContainer[i].style.color = "#1A3F92";
            listContainer[i].style.fontWeight = "bolder";
            listContainer[i].addEventListener('mouseenter', function(e) {
                listContainer[i].style.color = "#5D90FF";
                listContainer[i].style.borderBottom = "2px solid #5D90FF";
            });

            listContainer[i].addEventListener('mouseleave', function(e) {
                listContainer[i].style.color = "#1A3F92";
                listContainer[i].style.borderBottom = "";
            });
        }
    // When window is not scrolled
    } else if (navigationBar.classList.contains('shadow-effect')) {
        navigationBar.classList.remove('shadow-effect');
        navigationBar.classList.remove('navigation-scroll');
        navigationBar.style.height = "80px";
        siteLogo.style.margin = "24px 0px";
        mainHeaderLogo.style.color = "#5D90FF";
        for (let i = 0; i < listContainer.length; i++){
            listContainer[i].style.color = "";
            listContainer[i].style.fontWeight = "";

            listContainer[i].addEventListener('mouseenter', function(e) {
                listContainer[i].style.color = "";
                listContainer[i].style.borderBottom = "";
            });
            listContainer[i].addEventListener('mouseleave', function(e) {
                listContainer[i].style.color = "#5D90FF";
            });
        }

    } else {
        navigationBar.classList.remove('shadow-effect');
        navigationBar.classList.remove('navigation-scroll');
        navigationBar.style.height = "80px";
        siteLogo.style.margin = "24px 0px";
        mainHeaderLogo.style.color = "#5D90FF";
        for (let i = 0; i < listContainer.length; i++){
            listContainer[i].style.color = "";
            listContainer[i].style.fontWeight = "";

            listContainer[i].style.color = "";
            listContainer[i].style.fontWeight = "";

            listContainer[i].addEventListener('mouseenter', function(e) {
                listContainer[i].style.color = "";
                listContainer[i].style.borderBottom = "";
            });
            listContainer[i].addEventListener('mouseleave', function(e) {
                listContainer[i].style.color = "#5D90FF";
            });
        }
    }
});


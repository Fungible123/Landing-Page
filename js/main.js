// Smooth Scroll applied to the navbar

const scroll = new SmoothScroll('.navigation-bar a[href*="#"]', {
    speed: 800
});

// Applying effects to the navigation bar when scrolled and clicked

let navigationBar = document.querySelector('.main-header');
let homeSection = document.querySelector('.home-section');
let dropDown = document.querySelector('.services-dropdown');

window.addEventListener('scroll', function(e) {

    const lastPosition = window.scrollY;
    // When window is scrolled
    if (lastPosition > 50 ) {
        navigationBar.classList.add('fixed-nav');
        homeSection.classList.add('fixed-nav');
        dropDown.classList.add('fixed-nav');
    // When window is not scrolled
    } else if (navigationBar.classList.contains('fixed-nav')) {
        navigationBar.classList.remove('fixed-nav');
        homeSection.classList.remove('fixed-nav');
        dropDown.classList.remove('fixed-nav');
    // When no action is done
    } else {
        navigationBar.classList.remove('fixed-nav');
        homeSection.classList.remove('fixed-nav');
        dropDown.classList.remove('fixed-nav');
    }
});

// Getting the value from the email field and putting it on the contact form

document.getElementById('getstarted').addEventListener('submit', redirectToContact);

function redirectToContact(e) {
    e.preventDefault();

    let getStartedText = document.getElementById('getemail').value;
    
    document.getElementById('setemail').value = getStartedText;
}

// Scroll to Contact section when you click the Get Started button

let submitBtn = document.querySelector('#submitemail');

submitBtn.addEventListener('click', function () {
    document.querySelector('#contact').scrollIntoView(true);
})

// Modal for Design Images

let lightboxDescription = GLightbox({
    selector: 'glightboxTest'
});

// Mobile Navbar

const hamburgerButton = () => {
    const burger = document.querySelector('.hamburger');
    const navigationPanel = document.querySelector('.navigation-bar');

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        navigationPanel.classList.toggle('open');
    });
}

hamburgerButton();
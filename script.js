const header = document.querySelector('#fixed-header');
const menu = document.querySelector('.menu');

addEventListener('scroll', onScroll);
onScroll();

function onScroll() {
    showHeaderOnScroll();
    showBackToTopOnScroll();
    changeBackToTopButtonColor();

    activateMenuAtCurrentSection();
}

function activateMenuAtCurrentSection() {
    const targetLine = scrollY + innerHeight / 2;

    const sectionTop = home.offsetTop;
    const sectionHeight = home.offsetHeight;

    console.log(sectionHeight);

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

    
}

function showHeaderOnScroll() {
    scrollY > 0 ? header.classList.add('scroll') : header.classList.remove('scroll');
}

function showBackToTopOnScroll() {
    scrollY > 500 ? backToTopButton.classList.add('show') : backToTopButton.classList.remove('show');
}

function changeBackToTopButtonColor() {
    scrollY > 4089 ?  backToTopButton.classList.add('invert-color') : backToTopButton.classList.remove('invert-color');
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}



ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home,
    .home-content,
    .home-content #woman-image,
    .home-content .stats,
    #services,
    .services-content h4,
    .services-content h2,
    .services-content .card,
    #about,
    .about-content h4,
    .about-content h2,
    .about-content p,
    .about-content img,
    #contact,
    .contact-content h2,
    .contact-content p,
    .contact-content img`);
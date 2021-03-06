const header = document.querySelector('#fixed-header');

addEventListener('scroll', onScroll);
onScroll();

function onScroll() {
    showHeaderOnScroll();
    showBackToTopOnScroll();

    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    // verificar se a seção passou da linha
    // quais dados vou precisar?
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    // verificar se a base está abaixo da linha alvo

    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    // limites da seção
    const sectionBoundaries =
        sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}




function showHeaderOnScroll() {
    scrollY > 0 ? header.classList.add('scroll') : header.classList.remove('scroll');
}

function showBackToTopOnScroll() {
    scrollY > 500 ? backToTopButton.classList.add('show') : backToTopButton.classList.remove('show');
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
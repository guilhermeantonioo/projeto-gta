const btn = document.querySelector('.btn-plataforma');

const elementoPlataforma = document.querySelector('.btn-plataforma .plataformas');

btn.addEventListener('click' , () => {
    elementoPlataforma.classList.add('ativo')
})

const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu-mobile');
const body = document.body;

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('showMenu');

    // Adiciona a transição ao abrir o menu
    if (menu.classList.contains('showMenu')) {
        menu.style.transition = 'max-height 1s linear';
        disableScroll();
    } else {
        // Remove a transição ao fechar o menu
        menu.style.transition = 'none';
        enableScroll();
    }
});

// Adiciona um ouvinte de eventos para cada item de navegação
const navLinks = document.querySelectorAll('.menu-mobile a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Fecha o menu ao escolher uma opção de navegação
        menu.classList.remove('showMenu');
        enableScroll();
    });
});

// Função para desativar o scroll
function disableScroll() {
    const scrollY = window.scrollY;
    body.style.overflow = 'hidden';
    window.scrollTo(0, scrollY);
}

// Função para reativar o scroll
function enableScroll() {
    body.style.overflow = 'visible';
}

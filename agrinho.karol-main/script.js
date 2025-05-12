// Exemplo de script simples para efeito de animação ao scroll
document.addEventListener('scroll', function () {
    let scrollPos = window.scrollY;
    if (scrollPos > 100) {
        document.querySelector('header').classList.add('sticky');
    } else {
        document.querySelector('header').classList.remove('sticky');
    }
});
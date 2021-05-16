var botonMenuResponsive = document.querySelector('.iconoMenu img');

function verMenu() {
    var miMenu = document.querySelector('.menu');
    miMenu.classList.toggle('responsive');
}

botonMenuResponsive.addEventListener('click',verMenu);
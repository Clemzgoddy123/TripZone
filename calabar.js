const calabarMenu = document.getElementById('calabar-menu')
const calabarButton = document.getElementById('calabar-button')

calabarButton.addEventListener('click', () => {
    calabarMenu.style.display = calabarMenu.style.display
    === 'block' ? 'none' : 'block';
});
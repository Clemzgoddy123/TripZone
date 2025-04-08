const damMenu = document.getElementById('dam-menu')
const damButton = document.getElementById('dam-button')

damButton.addEventListener('click', () => {
    damMenu.style.display = damMenu.style.display
    === 'block' ? 'none' : 'block';
});
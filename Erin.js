const erinMenu = document.getElementById('Erin-menu')
const erinButton = document.getElementById('erin-button')

erinButton.addEventListener('click', () => {
    erinMenu.style.display = erinMenu.style.display
    === 'block' ? 'none' : 'block';
});
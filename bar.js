const barMenu = document. getElementById('bar-menu')
const barButton = document.getElementById('bar-button')

barButton.addEventListener('click', () => {
    barMenu.style.display = barMenu.style.display
    === 'block' ? 'none' : 'block';
});
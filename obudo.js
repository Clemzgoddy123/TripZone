const plateauButton = document.getElementById('obudu-button')
const plateMenu = document.getElementById('obudu-menu')

plateauButton.addEventListener('click', () => {
    plateMenu.style.display = plateMenu.style.display
    === 'block' ? 'none' : 'block';
});
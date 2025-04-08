const guraraMenu = document.getElementById('gurara-menu')
const guraraButton = document.getElementById('gurara-button')

guraraButton.addEventListener('click', () => {
    guraraMenu.style.display = guraraMenu.style.display
    === 'block' ? 'none' : 'block';
});
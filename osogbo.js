const sacredMenu = document.getElementById('osacred-menu')
const sacredButton = document.getElementById('sacred-button')

sacredButton.addEventListener('click', () => {
    sacredMenu.style.display = sacredMenu.style.display
    === 'block' ? 'none' : 'block';
});
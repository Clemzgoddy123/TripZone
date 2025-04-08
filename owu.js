const owuMenu = document.getElementById('owu-menu')
const owuButton = document.getElementById('owu-button')

owuButton.addEventListener('click', () => {
    owuMenu.style.display = owuMenu.style.display
    === 'block' ? 'none' : 'block';
});
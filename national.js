const nationalMenu = document.getElementById('national-menu')
const nationalButton = document.getElementById('national-button')

nationalButton.addEventListener('click', () => {
    nationalMenu.style.display = nationalMenu.style.display
    === 'block' ? 'none' : 'block';
});

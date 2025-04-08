const awhumMenu = document.getElementById('awhum-menu')
const awhumButton = document.getElementById('awhum-button')

awhumButton.addEventListener('click', () => {
    awhumMenu.style.display = awhumMenu.style.display
    === 'block' ? 'none' : 'block';
});
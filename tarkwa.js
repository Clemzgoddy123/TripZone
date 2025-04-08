const tarkwaMenu = document.getElementById('tarkwa-menu')
const tarkwaButton = document.getElementById('tarkwa-button')

tarkwaButton.addEventListener('click', () => {
    tarkwaMenu.style.display = tarkwaMenu.style.display
    === 'block' ? 'none' : 'block';
});
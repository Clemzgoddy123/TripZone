const tankariMenu = document.getElementById('tankari-menu')
const tankariButton = document.getElementById ('tankari-button')

tankariButton.addEventListener('click', () => {
    tankariMenu.style.display = tankariMenu.style.display
    === 'block' ? 'none' : 'block';
});
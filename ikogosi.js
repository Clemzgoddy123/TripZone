const ikogosiMenu = document.getElementById('ikogosi-menu')
const ikogosiButton = document.getElementById('ikogosi-button')

ikogosiButton.addEventListener('click', () => {
    ikogosiMenu.style.display = ikogosiMenu.style.display
    === 'block' ? 'none' : 'block';
});
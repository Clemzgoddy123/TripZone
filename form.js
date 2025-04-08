const formMenu = document.getElementById('form-menu')
const formButton = document.getElementById('form-Button')

formButton.addEventListener('click', () => {
    formMenu.style.display = formMenu.style.display
    === 'block' ? 'none' : 'block';
});
const beninMenu = document.getElementById('benin-menu');
const TouristButton = document.getElementById('Tourist-button');


TouristButton.addEventListener('click', () =>  {

    beninMenu.style.display  = beninMenu.style.display
    === 'block' ? 'none' : 'block';
});


const kainjiMenu = document.getElementById('kainji-menu');
const KainjiButton = document.getElementById('Kainji-button');


KainjiButton.addEventListener('click', () =>  {

    kainjiMenu.style.display  = kainjiMenu.style.display
    === 'block' ? 'none' : 'block';
});






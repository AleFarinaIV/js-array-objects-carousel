// creo la struttura dati (array di oggetti)
const videogames = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// recupero il contenitore HTML per le slide
const slideContainer = document.getElementById('slider');

// creo la struttura HTML per ogni gioco utilizzando forEach
videogames.forEach((game, i) => {

    // aggiungo una slide al contenitore HTML
    slideContainer.innerHTML +=

    // creo la forma per ogni slide
    `<div class="container">
        <div class="content hide">
            <img src="./${game.image}" alt="">
            <h3>${game.title}</h3>
            <p>${game.text}</p>
            </p>
        </div>
    </div>`
});

// definisco la slide visibile all'inizio
let visibleElement = 0;

// recupero tutte le slide
const slides = document.querySelectorAll('.content')
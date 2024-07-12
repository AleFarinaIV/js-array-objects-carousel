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
videogames.forEach((game) => {

    // aggiungo una slide al contenitore HTML
    slideContainer.innerHTML +=

    // creo la forma per ogni slide
    `<div class="slide hide">
        <img src="./${game.image}" alt="">
        <div class="description">
            <h3>${game.title}</h3>
            <p>${game.text}</p>
        </div>
        </p>
    </div>`
});

// definisco la slide visibile all'inizio
let visibleElement = 0;

// recupero tutte le slide
const slides = document.querySelectorAll('.slide');

// rendo visibile la prima slide
slides[visibleElement].classList.remove('hide');

// recupero l'icona da usare come pulsante
const arrowRight = document.getElementById('arrow-right');

// utilizzo un evento click per cambiare slide
arrowRight.addEventListener('click', function() {

    // nascondo la slide attiva
    slides[visibleElement].classList.add('hide');

    // utilizzo delle condizioni per passare dall'ultima slide ala prima
    if (visibleElement === videogames.length - 1) {
        visibleElement = 0;
    }else {

        // incremento l'indice della slide attiva
        visibleElement++

    }

    // svelo la slide successiva
    slides[visibleElement].classList.remove('hide');
})

// recupero l'icona da usare come pulsante
const arrowLeft = document.getElementById('arrow-left');

// utilizzo un evento click per cambiare slide(reverse)
arrowLeft.addEventListener('click', function() {

    // nascondo la slide attiva
    slides[visibleElement].classList.add('hide');

    // utilizzo delle condizioni per passare dalla prima slide all'ultima
    if (visibleElement === 0) {
        visibleElement = videogames.length - 1;
    } else {
        // decremento l'indice della slide attiva
        visibleElement--
    }

    // svelo la slide precedente
    slides[visibleElement].classList.remove('hide');
})
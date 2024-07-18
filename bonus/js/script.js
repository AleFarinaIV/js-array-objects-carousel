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

const thumbnailsContainer = document.getElementById('thumbnails');

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

    // aggiungo un thumbnail per ogni gioco
    thumbnailsContainer.innerHTML +=

    // creo la forma per ogni thumbnail
    `<img src="./${game.image}" alt="${game.title}" class="mini-size opacity">`

});

// definisco la slide visibile all'inizio
let visibleElement = 0;

// recupero tutte le slide
const slides = document.querySelectorAll('.slide');

const thumbnails = document.querySelectorAll('.mini-size');

// rendo visibile la prima slide
slides[visibleElement].classList.remove('hide');

thumbnails[visibleElement].classList.remove('opacity')

// recupero l'icona da usare come pulsante
const arrowRight = document.getElementById('arrow-right');

// utilizzo un evento click per cambiare slide
arrowRight.addEventListener('click', nextSlide)

// recupero l'icona da usare come pulsante
const arrowLeft = document.getElementById('arrow-left');

// utilizzo un evento click per cambiare slide(reverse)
arrowLeft.addEventListener('click', previousSlide)

const btnStart_Stop = document.getElementById('start-stop')

const btnReverse = document.getElementById('reverse')

let nextInterval = null

let reverseInterval = true

let nextIcon = document.querySelector('.fa-forward')

let previousIcon = document.querySelector('.fa-backward')

function reverseDirection() {
        nextIcon.classList.remove('d-none')
        previousIcon.classList.add('d-none')
    
    if (reverseInterval === true) {
        clearInterval(nextInterval)
        nextInterval = setInterval(previousSlide, 1000)
        reverseInterval = false
        console.log('FALSE')
    }else {
        nextInterval = setInterval(nextSlide, 1000)
        reverseInterval = true
        nextIcon.classList.add('d-none')
        previousIcon.classList.remove('d-none')
        console.log('TRUE')
    }
}

btnStart_Stop.addEventListener('click', function () {

    if (nextInterval === null && reverseInterval === true) {
        nextInterval = setInterval(nextSlide, 1000)
    }else if (nextInterval !== null) {
        clearInterval(nextInterval)
        nextInterval = null
    }else if (reverseInterval === false) {
        nextInterval = setInterval(previousSlide, 1000)
    }
})

btnReverse.addEventListener('click', reverseDirection)

function nextSlide() {

    // nascondo la slide attiva
    slides[visibleElement].classList.add('hide');

    thumbnails[visibleElement].classList.add('opacity')

    // utilizzo delle condizioni per passare dall'ultima slide ala prima
    if (visibleElement === videogames.length - 1) {
        visibleElement = 0;
    }else {

        // incremento l'indice della slide attiva
        visibleElement++
    }

    // svelo la slide successiva
    slides[visibleElement].classList.remove('hide');

    thumbnails[visibleElement].classList.remove('opacity')
}

function previousSlide() {
    // nascondo la slide attiva
    slides[visibleElement].classList.add('hide');
    thumbnails[visibleElement].classList.add('opacity')

    // utilizzo delle condizioni per passare dalla prima slide all'ultima
    if (visibleElement === 0) {
        visibleElement = videogames.length - 1;
    } else {
        // decremento l'indice della slide attiva
        visibleElement--
    }

    // svelo la slide precedente
    slides[visibleElement].classList.remove('hide');
    thumbnails[visibleElement].classList.remove('opacity')
}
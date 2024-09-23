const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Sélection des éléments du DOM
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const bannerImage = document.querySelector('.banner-img');
const bannerTagline = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0; // Index de la slide active

// Créer les bullet points dynamiquement
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) {
        dot.classList.add('dot_selected'); // Sélectionner le premier point
    }
    dotsContainer.appendChild(dot);

    // Ajouter un event listener pour chaque point
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Fonction pour changer de slide
function goToSlide(index) {
    currentSlide = index;
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerTagline.innerHTML = slides[index].tagLine;

    // Mettre à jour les points actifs
    document.querySelectorAll('.dot').forEach((dot, idx) => {
        if (idx === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

// Ajouter les event listeners pour les flèches
leftArrow.addEventListener('click', function() {
    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    } else {
        goToSlide(slides.length - 1); // Retourner à la dernière slide si on est à la première
    }
});

rightArrow.addEventListener('click', function() {
    if (currentSlide < slides.length - 1) {
        goToSlide(currentSlide + 1);
    } else {
        goToSlide(0); // Retourner à la première slide si on est à la dernière
    }
});

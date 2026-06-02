function startPhotoHighlights() {
    const photoCards = document.querySelectorAll('#photoGrid .photo-card');
    let currentPhotoIndex = 0;

    if (photoCards.length === 0) {
        return;
    }

    photoCards[currentPhotoIndex].classList.add('highlighted');

    setInterval(() => {
        photoCards[currentPhotoIndex].classList.remove('highlighted');
        currentPhotoIndex = (currentPhotoIndex + 1) % photoCards.length;
        photoCards[currentPhotoIndex].classList.add('highlighted');
    }, 1800);
}

function startBackgroundSlideshow() {
    const backgrounds = [
        'assets/background1.jpg',
        'assets/background2.jpg',
        'assets/background3.jpg',
        'assets/background4.jpg',
        'assets/background5.jpg',
        'assets/background6.jpg'
    ];

    let currentIndex = 0;
    const updateBackground = () => {
        // darker overlay for better contrast
        document.body.style.backgroundImage = `linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.45) 100%), url('${backgrounds[currentIndex]}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        currentIndex = (currentIndex + 1) % backgrounds.length;
    };

    updateBackground();
    setInterval(updateBackground, 6000);
}

function initSlideshow() {
    startPhotoHighlights();
    startBackgroundSlideshow();
}

if (document.readyState === 'loading') {
    window.addEventListener('load', initSlideshow);
} else {
    initSlideshow();
}

window.startPhotoHighlights = startPhotoHighlights;
window.startBackgroundSlideshow = startBackgroundSlideshow;


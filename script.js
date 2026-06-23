function startPhotoHighlights() {
    const photoCards = document.querySelectorAll('.photo-grid .photo-card');
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

function initReviewLightbox() {
    const modal = document.getElementById('reviewLightbox');
    const modalImg = document.getElementById('reviewLightboxImg');
    const closeBtn = modal?.querySelector('.image-modal-close');
    const reviewImages = document.querySelectorAll('.review-photo img');

    if (!modal || !modalImg || !closeBtn || reviewImages.length === 0) {
        return;
    }

    reviewImages.forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modalImg.alt = img.alt || 'Review photo';
            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
        }
    });
}

function initHomeLightbox() {
    const modal = document.getElementById('homeLightbox');
    const modalImg = document.getElementById('homeLightboxImg');
    const closeBtn = modal?.querySelector('.image-modal-close');
    const homeImages = document.querySelectorAll('#gallery .photo-card img');

    if (!modal || !modalImg || !closeBtn || homeImages.length === 0) {
        return;
    }

    homeImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modalImg.alt = img.alt || 'Home photo';
            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
        }
    });
}

function disableAutoPageSlideshow() {
    try {
        sessionStorage.setItem('autoSlideDisabled', '1');
    } catch (error) {
        // ignore storage errors
    }
}

function isAutoPageSlideshowEnabled() {
    try {
        return sessionStorage.getItem('autoSlideDisabled') !== '1';
    } catch (error) {
        return true;
    }
}

function attachNavClickHandlers() {
    const navLinks = document.querySelectorAll('header nav a');
    const disableNavSlideshow = () => {
        disableAutoPageSlideshow();
    };

    navLinks.forEach(link => {
        link.addEventListener('click', disableNavSlideshow);
        link.addEventListener('touchstart', disableNavSlideshow, { passive: true });
    });
}

function startAutoPageSlideshow() {
    if (!isAutoPageSlideshowEnabled()) {
        return;
    }

    const pageSequence = [
        'home.html',
        'services.html',
        'products.html',
        'booking.html',
        'contact.html',
        'review.html'
    ];

    const currentPage = window.location.pathname.split('/').pop();
    const currentIndex = pageSequence.indexOf(currentPage);
    if (currentIndex === -1) {
        return;
    }

    const nextPage = pageSequence[(currentIndex + 1) % pageSequence.length];
    setTimeout(() => {
        window.location.href = nextPage;
    }, 2000);
}

function initSlideshow() {
    startPhotoHighlights();
    startBackgroundSlideshow();
    initHomeLightbox();
    initReviewLightbox();
    attachNavClickHandlers();
    startAutoPageSlideshow();
}

if (document.readyState === 'loading') {
    window.addEventListener('load', initSlideshow);
} else {
    initSlideshow();
}

window.startPhotoHighlights = startPhotoHighlights;
window.startBackgroundSlideshow = startBackgroundSlideshow;



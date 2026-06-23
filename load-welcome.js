(() => {
    const placeholderId = 'site-welcome';
    const welcomeHtml = `
<section id="welcome" class="welcome-section-full">
    <div class="welcome-content">
        <h1 class="welcome-title">Welcome to Jay Ambe Sound</h1>
        <p class="welcome-tagline">Your Professional Sound, Lighting & DJ Services for All Events</p>
        <p class="welcome-description">We provide professional audio equipment rental, DJ services, stage lights, and complete event management solutions for weddings, corporate events, concerts, and celebrations.</p>
        <div class="welcome-buttons">
            <a href="home.html" class="cta-button">Explore Our Gallery</a>
            <a href="services.html" class="cta-button">Our Services</a>
            <a href="contact.html" class="cta-button cta-secondary">Book Now</a>
        </div>
    </div>
</section>
`;

    const redirectDelay = 4000;

    const load = () => {
        const placeholder = document.getElementById(placeholderId);
        if (!placeholder) return;
        placeholder.innerHTML = welcomeHtml;

        const welcomeSection = document.querySelector('.welcome-section-full');
        const ctaLinks = document.querySelectorAll('.welcome-buttons a');

        const redirectTimeout = setTimeout(() => {
            if (welcomeSection) {
                welcomeSection.classList.add('fade-out');
            }
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 700);
        }, redirectDelay);

        ctaLinks.forEach(link => {
            link.addEventListener('click', () => {
                clearTimeout(redirectTimeout);
            });
        });
    };

    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', load);
    } else {
        load();
    }
})();

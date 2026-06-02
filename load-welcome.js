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
            <a href="contact.html" class="cta-button cta-secondary">Book Now</a>
        </div>
    </div>
</section>
`;

    const load = () => {
        const placeholder = document.getElementById(placeholderId);
        if (!placeholder) return;
        placeholder.innerHTML = welcomeHtml;
    };

    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', load);
    } else {
        load();
    }
})();

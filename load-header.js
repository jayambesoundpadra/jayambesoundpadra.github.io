(() => {
    const placeholderId = 'site-header';
    const headerHtml = `
<header>
    <div class="brand">
        <div class="logo-wrap">
            <img src="assets/sound.jpg" alt="Site Logo" id="logo">
            <div class="logo-text">JAY AMBE SOUND</div>
        </div>
        <img src="header image.jpg" alt="Header Image" id="header-image">
    </div>
    <div class="header-logos-right">
        <img src="header image1.jpg" alt="Header Logo 1" class="header-logo-right">
        <img src="header image2.jpg" alt="Header Logo 2" class="header-logo-right">
    </div>
    <h1>JAY AMBE SOUND PADRA</h1>
    <nav>
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="products.html">Our Products</a></li>
            <li><a href="booking.html">Event Booking</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="review.html">Reviews</a></li>
        </ul>
    </nav>
</header>
`;

    const load = () => {
        const placeholder = document.getElementById(placeholderId);
        if (!placeholder) return;
        placeholder.innerHTML = headerHtml;
    };

    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', load);
    } else {
        load();
    }
})();


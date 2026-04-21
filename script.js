// Ken Burns effect & Opacity on Scroll for Hero
const heroBg = document.getElementById('hero-bg');
const heroImg = heroBg ? heroBg.querySelector('img') : null;

window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / window.innerHeight;
    if (scrollPercent <= 1 && heroImg) {
        const scale = 1 + scrollPercent * 0.1; // Scale from 1 to 1.1
        const opacity = 1 - scrollPercent * 1.66; // Fade from 1 to 0.5 roughly
        heroImg.style.transform = `scale(${scale})`;
        heroBg.style.opacity = Math.max(0.5, opacity);
    }
});

// Intersection Observer for Reveal Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-group').forEach(el => {
    observer.observe(el);
});

// Smooth Scroll for Anchor Links (already handled by CSS scroll-behavior: smooth, but ensuring JS compatibility)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
function openTicketModal() {
    document.getElementById("ticketModal").classList.remove("hidden");
}

function closeTicketModal() {
    document.getElementById("ticketModal").classList.add("hidden");
}

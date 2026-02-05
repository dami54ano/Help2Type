// Main Navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
        
        lastScroll = currentScroll;
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                alert('Vielen Dank für Ihre Anmeldung! Sie erhalten in Kürze eine Bestätigungs-E-Mail.');
                this.reset();
            }
        });
    }

    // Scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate sections on scroll
    const sections = document.querySelectorAll('.target-group, .benefit-card, .testimonial-card, .partner-logo');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
// Cookie consent banner
window.addEventListener('load', function() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookiesBtn = document.getElementById('acceptCookies');
    
    if (!cookieConsent && cookieBanner) {
        cookieBanner.classList.remove('hidden');
    } else if (cookieBanner) {
        cookieBanner.classList.add('hidden');
    }
});

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    const cookieBanner = document.getElementById('cookieBanner');
    if (cookieBanner) {
        cookieBanner.classList.add('hidden');
    }
}

// Accept cookies button listener
document.addEventListener('DOMContentLoaded', function() {
    const acceptBtn = document.getElementById('acceptCookies');
    if (acceptBtn) {
        acceptBtn.addEventListener('click', acceptCookies);
    }
});
// Import Swiper functionality from site.js for carousels/sliders
// This file now includes both custom functionality and compiled site features
console.log('Help2Type Website - All features loaded');

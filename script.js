// Initialize Swiper for Hero Section
const heroSlider = new Swiper('.hero-slider', {
    loop: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    speed: 1000,
});

// Initialize Swiper for Testimonials
const testimonialSlider = new Swiper('.testimonial-slider', {
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    },
});

// Portfolio Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Set initial styles for portfolio items
    portfolioItems.forEach(item => {
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.animate-fade-up').forEach(el => {
    observer.observe(el);
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Submission Handler
const reservationForm = document.getElementById('reservationForm');
if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would normally send the data to a server
        // For now, we'll just show an alert
        alert('예약 문의가 접수되었습니다. 곧 연락드리겠습니다.');
        
        // Reset form
        this.reset();
    });
}

// Enhanced Lazy Loading for Background Images
document.addEventListener('DOMContentLoaded', function() {
    const imageElements = document.querySelectorAll('.service-image, .portfolio-image');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });

    imageElements.forEach(img => {
        img.classList.add('lazy-load');
        imageObserver.observe(img);
    });
});

// Preload critical images
function preloadImage(url) {
    const img = new Image();
    img.src = url;
}

// Preload hero images
preloadImage('images/photohero1.png');
preloadImage('images/photohero2.png');

// Navigation Effects
const navigation = document.querySelector('.navigation');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Mobile Menu Toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Header Scroll Effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for navigation styling
    if (currentScroll > 100) {
        navigation.classList.add('scrolled');
    } else {
        navigation.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Initialize Lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': '%1 / %2',
    'fadeDuration': 300,
    'imageFadeDuration': 300
});

// Performance optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Window resize handler with debounce
const handleResize = debounce(() => {
    // Add any resize handling logic here
}, 250);

window.addEventListener('resize', handleResize);

// Page Load Animations
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero content on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});
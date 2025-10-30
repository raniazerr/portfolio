// ===== NAVIGATION =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ===== SMOOTH SCROLL =====
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

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-category')) {
                animateSkillBars(entry.target);
            }
        }
    });
}, observerOptions);

// Observe elements
const elementsToAnimate = document.querySelectorAll(
    '.timeline-item, .project-card, .skill-category, .highlight-item, .info-card, .about-text'
);

elementsToAnimate.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== SKILL BARS ANIMATION =====
function animateSkillBars(skillCategory) {
    const skillBars = skillCategory.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        if (progress) {
            setTimeout(() => {
                bar.style.width = progress + '%';
            }, 200);
        }
    });
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzAAJitidP5JUHYD1lpODFhqLN5FHA-9kCtke8ztlt-RQqsNM1T1bZC2ShEicEMxfQQ/exec';

    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;

        fetch(scriptURL, { 
            method: 'POST', 
            body: new FormData(contactForm)
        })
        .then(response => {
            formMessage.textContent = '✓ Message envoyé avec succès !';
            formMessage.classList.add('success');
            formMessage.classList.remove('error');
            contactForm.reset();
            
            // Reset button
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                formMessage.textContent = '';
            }, 3000);
        })
        .catch(error => {
            formMessage.textContent = '✗ Erreur lors de l\'envoi. Veuillez réessayer.';
            formMessage.classList.add('error');
            formMessage.classList.remove('success');
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            console.error('Erreur!', error.message);
        });
    });
}

// ===== TYPING EFFECT (Optional Enhancement) =====
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing effect after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// ===== FLOATING CARDS PARALLAX =====
const floatingCards = document.querySelectorAll('.floating-card');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    floatingCards.forEach((card, index) => {
        const speed = (index + 1) * 10;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        card.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ===== SCROLL REVEAL =====
window.addEventListener('load', () => {
    // Add a slight delay before revealing elements
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===== CURSOR EFFECT (Optional - Advanced) =====
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

let cursorX = 0;
let cursorY = 0;
let pageX = 0;
let pageY = 0;
let size = 8;

document.addEventListener('mousemove', (e) => {
    pageX = e.clientX;
    pageY = e.clientY;
});

// Add cursor styles
const style = document.createElement('style');
style.textContent = `
    .custom-cursor {
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid var(--primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease, opacity 0.3s ease;
        display: none;
    }
    
    @media (min-width: 968px) {
        .custom-cursor {
            display: block;
        }
        body {
            cursor: none;
        }
        a, button {
            cursor: none;
        }
    }
`;
document.head.appendChild(style);

function loop() {
    cursorX = lerp(cursorX, pageX, 0.1);
    cursorY = lerp(cursorY, pageY, 0.1);
    cursor.style.left = cursorX - size / 2 + 'px';
    cursor.style.top = cursorY - size / 2 + 'px';
    requestAnimationFrame(loop);
}

function lerp(start, end, amount) {
    return (1 - amount) * start + amount * end;
}

loop();

// Hover effects for cursor
document.querySelectorAll('a, button').forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.opacity = '0.5';
    });
    item.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.opacity = '1';
    });
});

// ===== CONSOLE MESSAGE =====
console.log('%c👋 Salut ! ', 'color: #ff004f; font-size: 20px; font-weight: bold;');
console.log('%cPortfolio conçu par Rania Zeramdini 🚀', 'color: #00d4ff; font-size: 14px;');
console.log('%cCurieux(se) du code ? Contactez-moi ! 💼', 'color: #b0b0b0; font-size: 12px;');

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images (if any are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== THEME PREFERENCE (Optional - for future dark/light toggle) =====
// Store user preference
function setThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

function getThemePreference() {
    return localStorage.getItem('theme') || 'dark';
}

// Initialize theme on load
document.addEventListener('DOMContentLoaded', () => {
    const preferredTheme = getThemePreference();
    document.body.setAttribute('data-theme', preferredTheme);
});


/**
 * PRESTIGE PARIS STUDIO - PREMIUM ANIMATIONS SCRIPT
 * Handles scroll animations, parallax effects, and interactive enhancements
 */

(function () {
    'use strict';

    // ========================================
    // 1. PRELOADER
    // ========================================

    function initPreloader() {
        // Create preloader element
        const preloader = document.createElement('div');
        preloader.id = 'preloader';
        preloader.innerHTML = `
            <div class="preloader-content">
                <div class="pulse-circle"></div>
            </div>
        `;
        document.body.prepend(preloader);

        // Hide preloader after page load
        window.addEventListener('load', function () {
            setTimeout(function () {
                preloader.classList.add('fade-out');
                setTimeout(function () {
                    preloader.remove();
                }, 500);
            }, 800);
        });
    }

    // ========================================
    // 2. SCROLL ANIMATIONS
    // ========================================

    function initScrollAnimations() {
        // Elements to animate on scroll
        const animateElements = [
            '.section-title',
            '.treatment-card',
            '.testimonial-card',
            '.code-card',
            '.intro-text',
            '.intro-image',
            '.feature-card',
            '.visual-step',
            '.footer-col'
        ];

        // Add animate-on-scroll class to all target elements
        animateElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                el.classList.add('animate-on-scroll');
            });
        });

        // Intersection Observer options
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -80px 0px'
        };

        // Create observer
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // Optionally unobserve after animation
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all elements
        const elementsToObserve = document.querySelectorAll('.animate-on-scroll');
        elementsToObserve.forEach(el => observer.observe(el));
    }

    // ========================================
    // 3. PARALLAX EFFECTS
    // ========================================

    function initParallax() {
        let ticking = false;

        // Parallax scroll handler
        function updateParallax() {
            const scrolled = window.pageYOffset;

            // Hero parallax
            const hero = document.querySelector('.hero');
            if (hero && window.innerWidth > 768) {
                const heroOffset = scrolled * 0.5;
                hero.style.backgroundPositionY = heroOffset + 'px';
            }

            // Other parallax sections
            const parallaxSections = document.querySelectorAll('[data-parallax]');
            parallaxSections.forEach(section => {
                const speed = parseFloat(section.dataset.parallax) || 0.5;
                const rect = section.getBoundingClientRect();
                const offset = (window.innerHeight - rect.top) * speed;

                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    section.style.transform = `translateY(${offset}px)`;
                }
            });

            ticking = false;
        }

        // Throttle scroll events with requestAnimationFrame
        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });

        // Initial call
        updateParallax();
    }

    // ========================================
    // 4. SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================

    function initSmoothScroll() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 80; // Account for fixed header

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ========================================
    // 5. NAVBAR SCROLL EFFECT
    // ========================================

    function initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        let lastScroll = 0;

        window.addEventListener('scroll', function () {
            const currentScroll = window.pageYOffset;

            // Add shadow on scroll
            if (currentScroll > 50) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            }

            lastScroll = currentScroll;
        });
    }

    // ========================================
    // 6. CARD TILT EFFECT (OPTIONAL)
    // ========================================

    function initCardTilt() {
        const cards = document.querySelectorAll('.treatment-card, .code-card');

        cards.forEach(card => {
            card.addEventListener('mousemove', function (e) {
                if (window.innerWidth < 768) return; // Skip on mobile

                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });

            card.addEventListener('mouseleave', function () {
                card.style.transform = '';
            });
        });
    }

    // ========================================
    // 7. HERO CONTENT ANIMATION
    // ========================================

    function initHeroAnimation() {
        const heroContent = document.querySelector('.hero-content');
        if (!heroContent) return;

        // Animate hero content on load
        setTimeout(function () {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(30px)';

            setTimeout(function () {
                heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 100);
        }, 500);
    }

    // ========================================
    // 8. SECTION DIVIDERS
    // ========================================

    function addSectionDividers() {
        const sections = document.querySelectorAll('section:not(.hero):not(.quote-section)');

        sections.forEach((section, index) => {
            // Skip last section
            if (index === sections.length - 1) return;

            // Add divider after section
            const divider = document.createElement('div');
            divider.className = 'section-divider';
            section.after(divider);
        });
    }

    // ========================================
    // 9. IMAGE LAZY LOADING ENHANCEMENT
    // ========================================

    function enhanceImageLoading() {
        const images = document.querySelectorAll('img');

        images.forEach(img => {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';

            if (img.complete) {
                img.style.opacity = '1';
            } else {
                img.addEventListener('load', function () {
                    img.style.opacity = '1';
                });
            }
        });
    }

    // ========================================
    // 10. INITIALIZE ALL FEATURES
    // ========================================

    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Initialize features
        initPreloader();
        initScrollAnimations();
        initParallax();
        initSmoothScroll();
        initNavbarScroll();
        initCardTilt();
        initHeroAnimation();
        // addSectionDividers(); // Optional - uncomment if desired
        enhanceImageLoading();

        console.log('✨ Prestige Paris Studio animations initialized');
    }

    // Start initialization
    init();

})();

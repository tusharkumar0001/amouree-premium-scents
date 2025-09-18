// Luxury Perfume Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    let isMenuOpen = false;

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
            mobileNav.classList.toggle('active', isMenuOpen);
            
            // Animate hamburger menu
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (isMenuOpen) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'rotate(0) translate(0, 0)';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'rotate(0) translate(0, 0)';
            }
        });
    }

    // Close mobile menu when clicking on links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            isMenuOpen = false;
            mobileNav.classList.remove('active');
            
            // Reset hamburger menu
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'rotate(0) translate(0, 0)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'rotate(0) translate(0, 0)';
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Show success message (you can replace this with actual form submission)
                showNotification('Thank you for subscribing to our newsletter!', 'success');
                this.reset();
            }
        });
    }

    // Add to Cart Functionality
    const addToCartButtons = document.querySelectorAll('.btn-secondary, .btn-premium');
    const cartBadge = document.querySelector('.cart-badge');
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        if (button.textContent.includes('Add to Cart')) {
            button.addEventListener('click', function() {
                cartCount++;
                if (cartBadge) {
                    cartBadge.textContent = cartCount;
                }
                
                // Show success notification
                const productName = this.closest('.collection-card').querySelector('.card-title').textContent;
                showNotification(`${productName} added to cart!`, 'success');
                
                // Add button animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
        }
    });

    // View Details Functionality
    const viewDetailsButtons = document.querySelectorAll('.overlay-btn');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.collection-card').querySelector('.card-title').textContent;
            showNotification(`Viewing details for ${productName}`, 'info');
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navigation');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // Intersection Observer for animations
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

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.collection-card, .testimonial-card, .about-text, .about-image');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroSection && heroImage) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            if (scrolled < heroSection.offsetHeight) {
                heroImage.style.transform = `translateY(${parallax}px)`;
            }
        });
    }

    // Floating elements animation enhancement
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
        const delay = index * 0.5;
        element.style.animationDelay = `${delay}s`;
    });

    // Premium card glow effect on hover
    const premiumCards = document.querySelectorAll('.premium-card');
    premiumCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 40px rgba(255, 215, 0, 0.3), 0 20px 60px -10px rgba(33, 37, 41, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 8px 30px -8px rgba(33, 37, 41, 0.08)';
        });
    });

    // Search functionality (placeholder)
    const searchButtons = document.querySelectorAll('[aria-label="Search"]');
    searchButtons.forEach(button => {
        button.addEventListener('click', function() {
            showNotification('Search functionality coming soon!', 'info');
        });
    });

    // User account functionality (placeholder)
    const userButtons = document.querySelectorAll('[aria-label="User account"]');
    userButtons.forEach(button => {
        button.addEventListener('click', function() {
            showNotification('User account features coming soon!', 'info');
        });
    });

    // Shopping bag functionality (placeholder)
    const bagButtons = document.querySelectorAll('[aria-label="Shopping bag"]');
    bagButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (cartCount > 0) {
                showNotification(`You have ${cartCount} item(s) in your cart`, 'info');
            } else {
                showNotification('Your cart is empty', 'info');
            }
        });
    });

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => {
            notification.remove();
        });

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'hsl(42, 100%, 70%)' : type === 'error' ? 'hsl(0, 84%, 60%)' : 'hsl(210, 20%, 15%)'};
            color: ${type === 'success' || type === 'info' ? 'hsl(210, 20%, 15%)' : 'white'};
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 40px -10px rgba(0, 0,  0, 0.2);
            z-index: 10000;
            font-weight: 500;
            max-width: 400px;
            animation: slideInRight 0.3s ease-out;
            transition: all 0.3s ease-out;
        `;

        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }
            
            .notification-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: inherit;
                opacity: 0.7;
                transition: opacity 0.2s ease;
            }
            
            .notification-close:hover {
                opacity: 1;
            }
        `;
        
        if (!document.querySelector('#notification-styles')) {
            style.id = 'notification-styles';
            document.head.appendChild(style);
        }

        // Add to DOM
        document.body.appendChild(notification);

        // Close button functionality
        const closeButton = notification.querySelector('.notification-close');
        closeButton.addEventListener('click', function() {
            notification.style.transform = 'translateX(100%)';
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 300);
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.transform = 'translateX(100%)';
                notification.style.opacity = '0';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }
        }, 5000);
    }

    // Initialize page
    console.log('Amouree - Where Elegance Meets Eternity');
    console.log('Luxury perfume website loaded successfully!');
});
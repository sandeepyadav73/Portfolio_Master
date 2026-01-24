
    // --- JAVASCRIPT FOR INTERACTIVITY ---

    // 1. Mobile Menu Toggle
    function toggleMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        const barsIcon = document.getElementById('menu-icon-bars');
        const timesIcon = document.getElementById('menu-icon-times');
        
        mobileMenu.classList.toggle('active');
        barsIcon.classList.toggle('hidden');
        timesIcon.classList.toggle('hidden');
    }

    // 2. Newsletter Signup Mock Function
    function subscribe() {
        const emailInput = document.getElementById('newsletter-email');
        const messageElement = document.getElementById('subscribe-message');
        const email = emailInput.value.trim();

        if (email === "") {
            messageElement.textContent = "Please enter an email address.";
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            messageElement.textContent = "Invalid email format.";
            return;
        }

        // Simulate API call success
        messageElement.textContent = `Thank you for subscribing, ${email}!`;
        emailInput.value = ""; // Clear the input
    }
    
    // 3. Section Entry Animation (Simulated Intersection Observer via class application)
    function initializeAnimations() {
        // Get all sections that should animate on load/scroll
        const animatedSections = document.querySelectorAll('.animated-element');
        
        // Function to apply animation classes
        const applyAnimation = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeInSlide');
                    observer.unobserve(entry.target);
                }
            });
        };

        // Use Intersection Observer for a smooth reveal effect as the user scrolls
        const options = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.1 // 10% visible
        };

        const observer = new IntersectionObserver(applyAnimation, options);

        animatedSections.forEach(section => {
            observer.observe(section);
        });
    }
    
    // Note: The script file reference 'assets/js/main.js' was removed as per the single-file mandate.
    // All necessary JS is included here.

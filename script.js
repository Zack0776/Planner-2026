// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80; // Header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Accordion functionality
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const isActive = accordionItem.classList.contains('active');
            
            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });
}

// WhatsApp purchase function
function comprarPlanner(type) {
    const products = {
        planner: {
            name: 'Planner Logística 2026',
            price: 'R$ 180'
        },
        kit: {
            name: 'Kit Executivo (Planner + Garrafa Premium)',
            price: 'R$ 247'
        }
    };

    const product = products[type];
    
    const message = `Olá! Tenho interesse no *${product.name}*%0A%0A` +
                   `Valor: ${product.price}%0A%0A` +
                   `Gostaria de mais informações sobre o produto e forma de pagamento.`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/5511996733653?text=${message}`, '_blank');
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all benefit cards and pricing cards
    const animatedElements = document.querySelectorAll('.benefit-card, .pricing-card, .fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
    initHeaderScroll();
    initScrollAnimations();
    
    console.log('🎉 Landing Page DC Logística carregada com sucesso!');
});
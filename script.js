// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all Lucide icons
    lucide.createIcons();
    
    // Initialize header scroll effect
    initHeaderScroll();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    console.log('🎉 Landing Page DC Logística carregada com sucesso!');
});

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80; // Altura do cabeçalho
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Accordion functionality
function toggleAccordion(headerElement) {
    const accordionItem = headerElement.parentElement;
    const isActive = accordionItem.classList.contains('active');
    
    // Fecha todos os itens
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Abre o clicado se não estava ativo
    if (!isActive) {
        accordionItem.classList.add('active');
    }
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Intersection Observer para animações
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

    const animatedElements = document.querySelectorAll('.benefit-card, .testimonial-card, .pricing-card, .fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}
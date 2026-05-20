// Tailwind Configuration
tailwind.config = {
  darkMode: "class",
  theme: {
    screens: {
      sm: "520px",
      md: "768px",
      lg: "1024px"
    },
    extend: {
      maxWidth: {
        "7xl": "1400px"
      },
      colors: {
        primary: "#000613",
        secondary: "#0059bb",
        "accent-gold": "#d36900",
        "accent-bronze": "#723600",
        surface: "#f8f9fa",
        "surface-dim": "#d9dadb",
        "surface-container": "#edeeef",
        "surface-container-low": "#f3f4f5",
        "surface-container-high": "#e7e8e9",
        "on-surface": "#191c1d",
        "on-surface-variant": "#43474e",
        "outline-variant": "#c4c6cf"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        lg: "48px",
        gutter: "20px",
        xl: "80px",
        md: "24px",
        sm: "12px"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"]
      }
    }
  }
};

// Application Logic
document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('shadow-xl', 'shadow-primary/5');
        } else {
            header.classList.remove('shadow-xl', 'shadow-primary/5');
        }
    });

    // Card interactive states
    const cards = document.querySelectorAll('.card-shadow');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.material-symbols-outlined');
            if (icon) icon.style.fontVariationSettings = "'FILL' 1";
        });
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.material-symbols-outlined');
            if (icon) icon.style.fontVariationSettings = "'FILL' 0";
        });
    });

    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('font-semibold', 'border-b-2', 'border-accent-gold');
            link.classList.add('font-medium');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('font-semibold', 'border-b-2', 'border-accent-gold');
                link.classList.remove('font-medium');
            }
        });
    });
});

// Video Modal (Global scope)
function openModal(src) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    video.src = src;
    modal.classList.add('active');
    video.play();
}
function closeModal(e) {
    if (e && e.target !== e.currentTarget) return;
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    video.pause();
    video.src = '';
    modal.classList.remove('active');
}

// Advanced Interactivity for The Laan Journey

// 0. Sticky Header Logic
const siteHeader = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
});

// 1. Navigation Overlay Logic
const navTrigger = document.querySelector('.js-nav-trigger');
const navOverlay = document.querySelector('.js-nav-overlay');
const navLinks = document.querySelectorAll('.js-nav-link');

if (navTrigger && navOverlay) {
  navTrigger.addEventListener('click', () => {
    navOverlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navOverlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });
}

// 2. Sophisticated Scroll Reveal
const revealOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add a slight delay based on order if multiple elements trigger
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
      revealObserver.unobserve(entry.target);
    }
  });
}, revealOptions);

document.querySelectorAll('.sc-reveal').forEach(el => revealObserver.observe(el));

// 3. Smooth Momentum-style Scroll for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
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

// 4. Parallax Background Text Effect
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const bgTexts = document.querySelectorAll('.bg-text');
  
  bgTexts.forEach(text => {
    const parent = text.parentElement;
    const offsetTop = parent.offsetTop;
    const speed = 0.2;
    
    if (scrollY > offsetTop - window.innerHeight && scrollY < offsetTop + parent.offsetHeight) {
      const yPos = (scrollY - offsetTop) * speed;
      text.style.transform = `translateY(${yPos}px)`;
    }
  });
});

// 5. Hero Image Parallax
const heroImg = document.querySelector('.hero__visual img');
if (heroImg) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      heroImg.style.transform = `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.1}px)`;
    }
  });
}

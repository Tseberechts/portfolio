document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    // Close menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // Scroll to sections smoothly when clicking nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navHeight = document.querySelector('.main-nav').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Change navbar background on scroll
  const mainNav = document.querySelector('.main-nav');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  });
});

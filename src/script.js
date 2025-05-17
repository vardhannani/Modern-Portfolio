// Burger menu logic
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobile-nav');
  const closeNav = document.getElementById('close-nav');
  const body = document.body;

  burger.addEventListener('click', () => {
    mobileNav.classList.remove('opacity-0', 'pointer-events-none');
    mobileNav.classList.add('opacity-100');
    body.style.overflow = 'hidden';
  });

  closeNav.addEventListener('click', () => {
    mobileNav.classList.add('opacity-0', 'pointer-events-none');
    mobileNav.classList.remove('opacity-100');
    body.style.overflow = '';
  });

  // Smooth scroll for all nav links
  function smoothScrollTo(target) {
    const el = document.querySelector(target);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70, // adjust for sticky navbar
        behavior: 'smooth'
      });
    }
  }

  // Desktop nav
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo(this.getAttribute('href'));
      // Active link styling
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('text-indigo-700', 'font-bold'));
      this.classList.add('text-indigo-700', 'font-bold');
    });
  });

  // Mobile nav
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo(this.getAttribute('href'));
      mobileNav.classList.add('opacity-0', 'pointer-events-none');
      mobileNav.classList.remove('opacity-100');
      body.style.overflow = '';
    });
  });

  // Highlight nav link on scroll
  const sections = ['home', 'about', 'skills', 'certificats', 'projects', 'contact'];
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 80;
    for (let id of sections) {
      const sec = document.getElementById(id);
      if (sec && sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('text-indigo-700', 'font-bold'));
        const active = document.querySelector('.nav-link[href="#' + id + '"]');
        if (active) active.classList.add('text-indigo-700', 'font-bold');
      }
    }
  });

  // Optional: Close mobile nav on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      mobileNav.classList.add('opacity-0', 'pointer-events-none');
      mobileNav.classList.remove('opacity-100');
      body.style.overflow = '';
    }
  });
const resumeBtn = document.getElementById('resume-btn');
if (resumeBtn) {
  resumeBtn.addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = './resume.pdf';
    link.download = 'Yashwanth_Guthikonda_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
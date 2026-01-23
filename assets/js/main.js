// Mobile navigation toggle
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  const isOpen = nav.classList.toggle('open');
  const toggle = document.querySelector('.header__mobile-toggle');
  if (toggle) {
    toggle.setAttribute('aria-expanded', isOpen);
  }
}

// Close mobile nav when clicking outside
document.addEventListener('click', function(event) {
  const nav = document.getElementById('mobile-nav');
  const toggle = document.querySelector('.header__mobile-toggle');

  if (nav && toggle && !nav.contains(event.target) && !toggle.contains(event.target)) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Close mobile nav with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const nav = document.getElementById('mobile-nav');
    const toggle = document.querySelector('.header__mobile-toggle');
    if (nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    }
  }
});

// Copy code to clipboard
function copyCode(button) {
  const codeBlock = button.closest('.code-block');
  const code = codeBlock.querySelector('code');
  const text = code.textContent;

  navigator.clipboard.writeText(text).then(function() {
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.style.color = '#10B981';

    setTimeout(function() {
      button.textContent = originalText;
      button.style.color = '';
    }, 2000);
  }).catch(function(err) {
    console.error('Failed to copy text: ', err);
  });
}

// Smooth scroll for anchor links
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

// Add active class to current nav item
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.header__link, .mobile-nav__link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href) && href !== '/') {
      link.classList.add('active');
    }
  });
});

// Add scroll indicator for tables
document.addEventListener('DOMContentLoaded', function() {
  const tables = document.querySelectorAll('table');

  tables.forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.style.overflowX = 'auto';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
});

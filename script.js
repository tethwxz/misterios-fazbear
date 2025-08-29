document.addEventListener('DOMContentLoaded', () => {
  // --- MENU MOBILE ---
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu ul');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      // Atualiza o status para leitores de tela (acessibilidade)
      const isExpanded = menu.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // --- DESTAQUE DO LINK ATIVO NO MENU ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.menu a');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  // --- BANNER DE COOKIES ---
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookiesBtn = document.getElementById('accept-cookies');
  
  // Verifica se o banner existe antes de adicionar o listener
  if (cookieBanner && acceptCookiesBtn) {
      const isAccepted = localStorage.getItem('cookiesAccepted');

      if (!isAccepted) {
          // No seu CSS, .cookies tem display: flex. Vamos usar isso.
          cookieBanner.style.display = 'flex'; 
      } else {
          cookieBanner.style.display = 'none';
      }

      acceptCookiesBtn.addEventListener('click', () => {
          localStorage.setItem('cookiesAccepted', 'true');
          cookieBanner.style.display = 'none';
      });
  }
});
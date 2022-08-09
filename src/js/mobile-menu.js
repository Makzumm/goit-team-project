(() => {
  const menuItemRef = document.querySelector('[data-menu-item]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const menuBtnRef = document.querySelector('[data-menu-button]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
  });

  menuItemRef.addEventListener('click', () => {
    mobileMenuRef.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuBtnRef.classList.remove('is-open');
  });
})();

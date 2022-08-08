(() => {
  const menuItemRef = document.querySelector('[data-menu-item]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const menuBtnRef = document.querySelector('[data-menu-button]');

  menuItemRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
    menuBtnRef.classList.toggle('is-open');
  });

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
  });
})();

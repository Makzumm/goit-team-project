(() => {
  const refs = {
    openModalBtn2: document.querySelector('[data-modal-about-open]'),
    closeModalBtn2: document.querySelector('[data-modal-about-close]'),
    backdrop2: document.querySelector('[data-backdrop-about]'),
  };

  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn2.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.backdrop2.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();

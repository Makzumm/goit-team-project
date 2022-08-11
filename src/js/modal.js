(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    backdrop: document.querySelector('[data-backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.backdrop.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();

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

(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-map-open]'),
    closeModalBtn1: document.querySelector('[data-modal-map-close]'),
    backdrop1: document.querySelector('[data-backdrop-modal]'),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.closeModalBtn1.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.backdrop1.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();

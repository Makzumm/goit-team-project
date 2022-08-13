(()=>{
    const refs = {
        openModalBtn1: document.querySelector("[data-modal-map-open]"),
        closeModalBtn1: document.querySelector("[data-modal-map-close]"),
        backdrop1: document.querySelector("[data-backdrop-modal]")
    };
    refs.openModalBtn1.addEventListener("click", toggleModal);
    refs.closeModalBtn1.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.backdrop1.classList.toggle("is-hidden");
        document.body.classList.toggle("modal-open");
    }
})();

//# sourceMappingURL=index.4325b25b.js.map

(()=>{
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        backdrop: document.querySelector("[data-backdrop]")
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden");
        document.body.classList.toggle("modal-open");
    }
})();

//# sourceMappingURL=index.ba4f3a9f.js.map

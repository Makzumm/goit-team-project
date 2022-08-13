(()=>{
    const mobileMenuRef = document.querySelector("[data-menu]");
    const menuBtnRef = document.querySelector("[data-menu-button]");
    menuBtnRef.addEventListener("click", ()=>{
        const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);
        mobileMenuRef.classList.toggle("is-open");
        document.body.classList.toggle("menu-open");
    });
})();

//# sourceMappingURL=index.707f265c.js.map

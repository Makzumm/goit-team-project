!function(){var e,t,o;function n(e){e.currentTarget.closest(".products-section__item").classList.toggle("is-flipped")}$(document).ready((function(){$("a").on("click",(function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},500,(function(){window.location.hash=t}))}}))})),e=document.querySelector("[data-menu-item]"),t=document.querySelector("[data-menu]"),(o=document.querySelector("[data-menu-button]")).addEventListener("click",(function(){var e="true"===o.getAttribute("aria-expanded")||!1;o.classList.toggle("is-open"),o.setAttribute("aria-expanded",!e),t.classList.toggle("is-open"),document.body.classList.toggle("menu-open")})),e.addEventListener("click",(function(){t.classList.remove("is-open"),document.body.classList.remove("menu-open"),o.classList.remove("is-open")})),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector("[data-backdrop]")};function t(){e.backdrop.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),function(){var e={openModalBtn2:document.querySelector("[data-modal-about-open]"),closeModalBtn2:document.querySelector("[data-modal-about-close]"),backdrop2:document.querySelector("[data-backdrop-about]")};function t(){e.backdrop2.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}e.openModalBtn2.addEventListener("click",t),e.closeModalBtn2.addEventListener("click",t)}(),function(){var e={openModalBtn1:document.querySelector("[data-modal-map-open]"),closeModalBtn1:document.querySelector("[data-modal-map-close]"),backdrop1:document.querySelector("[data-backdrop-modal]")};function t(){e.backdrop1.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}e.openModalBtn1.addEventListener("click",t),e.closeModalBtn1.addEventListener("click",t)}(),document.querySelectorAll(".products-section__item button").forEach((function(e){return e.addEventListener("click",n)})),AOS.init()}();
//# sourceMappingURL=index.1b24ec80.js.map
!function(){$(document).ready((function(){$("a").on("click",(function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},500,(function(){window.location.hash=t}))}}))}));var e,t,o,n=1;function a(e){var t,o=document.getElementsByClassName("reviews-slider"),a=document.getElementsByClassName("pagination__dot");for(e>o.length&&(n=1),e<1&&(n=o.length),t=0;t<o.length;t++)o[t].style.display="none";for(t=0;t<a.length;t++)a[t].className=a[t].className.replace(" active","");o[n-1].style.display="flex",a[n-1].className+=" active"}function l(e){e.currentTarget.closest(".products-section__item").classList.toggle("is-flipped")}a(n),e=document.querySelector("[data-menu-item]"),t=document.querySelector("[data-menu]"),(o=document.querySelector("[data-menu-button]")).addEventListener("click",(function(){var e="true"===o.getAttribute("aria-expanded")||!1;o.classList.toggle("is-open"),o.setAttribute("aria-expanded",!e),t.classList.toggle("is-open"),document.body.classList.toggle("menu-open")})),e.addEventListener("click",(function(){t.classList.remove("is-open"),document.body.classList.remove("menu-open"),o.classList.remove("is-open")})),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector("[data-backdrop]")};function t(){e.backdrop.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),function(){var e={openModalBtn2:document.querySelector("[data-modal-about-open]"),closeModalBtn2:document.querySelector("[data-modal-about-close]"),backdrop2:document.querySelector("[data-backdrop-about]")};function t(){e.backdrop2.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}e.openModalBtn2.addEventListener("click",t),e.closeModalBtn2.addEventListener("click",t)}(),function(){var e={openModalBtn1:document.querySelector("[data-modal-map-open]"),closeModalBtn1:document.querySelector("[data-modal-map-close]"),backdrop1:document.querySelector("[data-backdrop-modal]")};function t(){e.backdrop1.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}e.openModalBtn1.addEventListener("click",t),e.closeModalBtn1.addEventListener("click",t)}(),document.querySelectorAll(".products-section__item button").forEach((function(e){return e.addEventListener("click",l)})),window.onload=function(){var e=document.getElementsByClassName("gallery__img"),t=document.getElementById("my__modal"),o=document.getElementById("img01"),n=document.getElementById("caption"),a=document.getElementById("close"),l=document.getElementById("modal__block");for(i=0;i<e.length;i++){e[i].onclick=function(){c(this)}}function c(e){t.style.display="flex",l.style.transform="translateY(0%)",o.src=e.src,o.alt=e.alt,o.style.borderRadius="25%",o.style.border="2px solid white",n.innerHTML=o.alt}function d(){t.style.display="none"}a.onclick=function(){l.style.transform="translateY(-200%)",setTimeout(d,500)}},AOS.init()}();
//# sourceMappingURL=index.d06b81f4.js.map

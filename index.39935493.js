(()=>{const e=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-menu]");e.addEventListener("click",(()=>{const t="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!t),o.classList.toggle("is-open")}))})();new Swiper(".swiper",{direction:"horizontal",spaceBetween:100,loop:!0,speed:2500,autoplay:{delay:7e3},pagination:{el:".swiper-pagination",clickable:!0}});new KeenSlider("#my-keen-slider",{loop:!0,defaultAnimation:{duration:3e3},detailsChanged:e=>{e.slides.forEach(((o,t)=>{o.style.opacity=e.track.details.slides[t].portion}))},renderMode:"custom"},[e=>{let o,t=!1;function d(){clearTimeout(o)}function n(){clearTimeout(o),t||(o=setTimeout((()=>{e.next()}),6700))}e.on("created",(()=>{e.container.addEventListener("mouseover",(()=>{t=!0,d()})),e.container.addEventListener("mouseout",(()=>{t=!1,n()})),n()})),e.on("dragStarted",d),e.on("animationEnded",n),e.on("updated",n)}]);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-about-open]"),closeModalBtn:document.querySelector("[data-modal-about-close]"),modal:document.querySelector("[data-modal-about]"),body:document.querySelector("body")};function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-franchise-open]"),closeModalBtn:document.querySelector("[data-modal-franchise-close]"),modal:document.querySelector("[data-modal-franchise]"),body:document.querySelector("body")};function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-mob-open]"),closeModalBtn:document.querySelector("[data-modal-mob-close]"),modal:document.querySelector("[data-moda-mobl]"),body:document.querySelector("body")};function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.39935493.js.map

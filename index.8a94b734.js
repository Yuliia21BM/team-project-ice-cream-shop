(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]");e.addEventListener("click",(()=>{const o="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open")}))})();new Swiper(".swiper",{direction:"horizontal",spaceBetween:100,loop:!0,speed:2500,autoplay:{delay:7e3},pagination:{el:".swiper-pagination",clickable:!0}});new KeenSlider("#my-keen-slider",{loop:!0,defaultAnimation:{duration:3e3},detailsChanged:e=>{e.slides.forEach(((t,o)=>{t.style.opacity=e.track.details.slides[o].portion}))},renderMode:"custom"},[e=>{let t,o=!1;function n(){clearTimeout(t)}function a(){clearTimeout(t),o||(t=setTimeout((()=>{e.next()}),6700))}e.on("created",(()=>{e.container.addEventListener("mouseover",(()=>{o=!0,n()})),e.container.addEventListener("mouseout",(()=>{o=!1,a()})),a()})),e.on("dragStarted",n),e.on("animationEnded",a),e.on("updated",a)}]);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};function t(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();
//# sourceMappingURL=index.8a94b734.js.map

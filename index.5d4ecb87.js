new Swiper(".swiper",{direction:"horizontal",speed:2500,spaceBetween:100,loop:!0,autoplay:{delay:7e3},pagination:{el:".swiper-pagination",clickable:!0}});new KeenSlider("#my-keen-slider",{loop:!0,defaultAnimation:{duration:3e3},detailsChanged:e=>{e.slides.forEach(((n,t)=>{n.style.opacity=e.track.details.slides[t].portion}))},renderMode:"custom"},[e=>{let n,t=!1;function o(){clearTimeout(n)}function i(){clearTimeout(n),t||(n=setTimeout((()=>{e.next()}),6700))}e.on("created",(()=>{e.container.addEventListener("mouseover",(()=>{t=!0,o()})),e.container.addEventListener("mouseout",(()=>{t=!1,i()})),i()})),e.on("dragStarted",o),e.on("animationEnded",i),e.on("updated",i)}]);
//# sourceMappingURL=index.5d4ecb87.js.map

var slider=new KeenSlider("#my-keen-slider",{loop:!0,defaultAnimation:{duration:3e3},detailsChanged:function(e){e.slides.forEach((function(n,t){n.style.opacity=e.track.details.slides[t].portion}))},renderMode:"custom"},[function(e){var n,t=!1;function o(){clearTimeout(n)}function i(){clearTimeout(n),t||(n=setTimeout((function(){e.next()}),2e3))}e.on("created",(function(){e.container.addEventListener("mouseover",(function(){t=!0,o()})),e.container.addEventListener("mouseout",(function(){t=!1,i()})),i()})),e.on("dragStarted",o),e.on("animationEnded",i),e.on("updated",i)}]);
//# sourceMappingURL=index.4911399f.js.map
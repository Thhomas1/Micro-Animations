const tl = gsap.timeline({defaults: {duration: 0.35, ease: "Power2.easeOut"  }
});

const home = document.querySelector(".home");


gsap.set('.feather', {scale: 0, transformOrigin: "center"});
home.addEventListener('click', () => {
    gsap.fromTo(".home-svg", { scale: 1}, {scale: 0.9, yoyo: true, repeat:1 }); // seteado animacion explosion
    gsap.fromTo(".feather", 
    { y: -5, scale: 0}, 
    { y: 20, scale: 1.5, duration: 1, stagger: 0.2}
    ); // seteado hojita el stagger lo usamo para que aparezca varias veces y se sienta que son mas hojas

    gsap.fromTo(".right-feather", { x:0 }, { x:5 });
    
});

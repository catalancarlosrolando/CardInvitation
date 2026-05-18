// 1. Registramos el plugin
gsap.registerPlugin(ScrollTrigger);

// 2. Preparamos los estados iniciales (ocultos) apenas carga la página
gsap.set(".cd-icon", { scale: 0, opacity: 0, rotation: -45 });
gsap.set(".cd-element", { y: 30, opacity: 0 });
gsap.set(".cd-line", { scaleX: 0 });
gsap.set(".cd-title", { opacity: 0, y: 15 });
gsap.set(".cd-divider", { scaleY: 0 });
gsap.set(".cd-label", { opacity: 0, y: 10 });
gsap.set(".cd-num", { opacity: 0, scale: 0.5 });

// 3. Creamos la línea de tiempo maestra vinculada al Scroll
const countdownTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#Countdown",      // Qué sección vigila
        start: "top 75%",           // Arranca cuando la sección asoma un 25% desde el fondo
        toggleActions: "play none none reverse", // Se reproduce al bajar, se resetea si vuelven arriba de todo
        once: false                 // Si querés que se repita cada vez que entran, dejalo en false
    },
    defaults: { ease: "power4.out" }
});

// 4. La secuencia estética de aparición
countdownTL.to(".cd-icon", {
    scale: 1,
    opacity: 1,
    rotation: 0,
    duration: 0.8,
    ease: "back.out(1.7)"
})
    .to(".cd-element", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15
    }, "-=0.4")
    .to(".cd-line", {
        scaleX: 1,
        duration: 0.5,
        ease: "power2.inOut"
    }, "-=0.4")
    .to(".cd-title", {
        opacity: 1,
        y: 0,
        duration: 0.6
    }, "-=0.2")
    .to(".cd-divider", {
        scaleY: 1,
        duration: 0.5,
        stagger: 0.1
    }, "-=0.4")
    .to(".cd-num", {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.1
    }, "-=0.3")
    .to(".cd-label", {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1
    }, "-=0.2");

// 5. El efecto del contador corriendo (Se acopla a la misma línea de tiempo)
document.querySelectorAll('.cd-num').forEach((el) => {
    const targetValue = parseInt(el.getAttribute('data-target'), 10);

    countdownTL.to(el, {
        textContent: targetValue,
        duration: 2,
        ease: "power3.out",
        snap: { textContent: 1 },
        onUpdate: function () {
            let current = Math.floor(el.textContent);
            el.textContent = current < 10 ? "0" + current : current;
        }
    }, "-=0.2"); // Arranca casi en simultáneo con las etiquetas
});
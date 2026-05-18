// 1. Configuramos el punto de pivote para que escalen desde su propio centro
gsap.set(".ripple-ring", { transformOrigin: "50% 50%", scale: 0, opacity: 0 });

// 2. Animación en bucle del Ripple (Efecto gota de agua continuo)
const rippleAnimation = gsap.fromTo(".ripple-ring",
    {
        scale: 0.3,
        opacity: 0.8,
        strokeWidth: 3
    },
    {
        scale: 2.2,          // Qué tanto se expande el círculo
        opacity: 0,          // Se desvanece al expandirse
        strokeWidth: 0.5,    // Se afina la línea al alejarse
        duration: 3,         // Tiempo que tarda cada onda en morir
        ease: "power1.out",
        stagger: {
            each: 1,         // Tiempo de espera entre que sale una onda y la siguiente
            repeat: -1       // Bucle infinito para el stagger
        }
    }
);

// BONUS: Si el usuario hace clic en la mariposa, genera un "pulso" extra rápido
document.getElementById('butterfly-container').addEventListener('click', () => {
    gsap.fromTo(".ripple-ring",
        { scale: 0.3, opacity: 1 },
        { scale: 2.5, opacity: 0, duration: 0.2, ease: "power2.out", overwrite: "auto" }
    );
    // Al terminar el pulso del clic, reiniciamos el bucle suave
    setTimeout(() => { rippleAnimation.restart(); }, 1200);
});
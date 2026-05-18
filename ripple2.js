// 1. Aseguramos que arranquen invisibles y bien centrados
gsap.set(".ripple-ring", { transformOrigin: "50% 50%", scale: 0, opacity: 0 });

// Array para guardar las animaciones individuales y poder controlarlas en el click
const rippleTimelines = [];

// 2. Creamos el efecto gota de agua continuo (Loop suave)
// En vez de un stagger global, animamos cada anillo de forma independiente
gsap.utils.toArray(".ripple-ring").forEach((ring, i) => {
    // Creamos un timeline infinito para cada círculo con un delay inicial escalonado
    const tl = gsap.timeline({
        repeat: -1,
        delay: i * 1.3 // Desfase de tiempo entre el arranque de cada onda
    });

    // El del fondo no se renderizará hasta que termine el delay de arriba
    tl.fromTo(ring,
        {
            scale: 0.2,
            opacity: 0.9,
            strokeWidth: 4
        },
        {
            scale: 12,           // Se expande a pantalla completa
            opacity: 0,          // Se desvanece
            strokeWidth: 0.2,    // Se vuelve ultra fino
            duration: 4,         // Duración del viaje de la onda
            ease: "power1.out"
        }
    );

    rippleTimelines.push(tl);
});

// 3. Interacción por CLICK (Pulso masivo inmediato)
document.getElementById('butterfly-container').addEventListener('click', () => {
    // Pausamos temporalmente el goteo continuo para que no interfiera con el click
    rippleTimelines.forEach(tl => tl.pause());

    gsap.fromTo(".ripple-ring",
        { scale: 0.1, opacity: 1, strokeWidth: 6 },
        {
            scale: 15,
            opacity: 0,
            strokeWidth: 0.1,
            duration: 1.5,
            ease: "power2.out",
            overwrite: "auto",
            onComplete: () => {
                // Cuando el gran pulso termina, reiniciamos el goteo continuo individual
                // Pasamos 'true' para que respete sus delays originales y vuelvan a escalonarse
                rippleTimelines.forEach(tl => tl.restart(true));
            }
        }
    );
});
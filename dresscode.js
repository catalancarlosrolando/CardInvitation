const card = document.getElementById('regaloCard');

// Creamos la línea de tiempo enlazada directamente al ScrollTrigger de la tarjeta
const shakeAnim = gsap.timeline({
    repeat: -1,      // Se repite infinitamente
    repeatDelay: 2,  // Espera 2 segundos entre cada bloque de vibración
    scrollTrigger: {
        trigger: card,
        start: "top 85%", // Arranca cuando la parte superior de la tarjeta llega al 85% de la pantalla

        // toggleActions define qué hace:
        // "play" al entrar hacia abajo.
        // "reset" al volver a subir, así si el invitado baja de nuevo, ¡vuelve a vibrar!
        toggleActions: "play none none reset"

        // (Si prefieres que vibre UNA ÚNICA VEZ y nunca más, usa: toggleActions: "play none none none")
    }
});

// Le damos la secuencia de vibración rápida
shakeAnim.to(card, { x: -6, rotation: -2, duration: 0.05 })
    .to(card, { x: 6, rotation: 2, duration: 0.05 })
    .to(card, { x: -6, rotation: -2, duration: 0.05 })
    .to(card, { x: 6, rotation: 2, duration: 0.05 })
    .to(card, { x: 0, rotation: 0, duration: 0.05 }); // Vuelve a su estado original
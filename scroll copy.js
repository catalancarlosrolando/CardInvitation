// Registramos el plugin ScrollTrigger de GSAP
gsap.registerPlugin(ScrollTrigger);

// 2. Animaciones de Revelación Dinámicas (Reveal Animation)
// Seleccionamos todas las secciones de la página
const sections = gsap.utils.toArray("section");

sections.forEach((sec) => {
    // Buscamos los elementos hijos dentro de la sección actual
    // Usamos selectores amplios para capturar las variaciones en las distintas secciones
    const iconContainer = sec.querySelector(".rounded-full");
    const title = sec.querySelector("h2, h3");
    const texts = sec.querySelectorAll("p");
    const buttons = sec.querySelector(".mt-6, button");

    // Creamos la línea de tiempo (Timeline) para la secuencia
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: sec,
            start: "top center", // Inicia cuando el tope de la sección alcanza el 80% de la altura del viewport (entra un 20%)
            markers: true, // Desactiva los marcadores de ScrollTrigger para producción
            toggleActions: "play none restart none", // Solo reproduce la animación al scrollear hacia abajo, no anima al subir
        }
    });

    // 3. Secuencia de Entrada (Staggered Timeline)

    // A) Contenedor del Ícono: Aparece con efecto elástico
    if (iconContainer) {
        tl.from(iconContainer, {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        });
    }

    // B) Título: Desplazamiento desde abajo con opacidad
    if (title) {
        tl.from(title, {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.4"); // Solapamiento con la animación anterior para mayor fluidez
    }

    // C) Descripción: Desplazamiento en cascada si hay varios párrafos
    if (texts.length > 0) {
        tl.from(texts, {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.15 // Efecto cascada entre párrafos
        }, "-=0.3");
    }

    // D) Botones/Etiquetas: Aparecen con un leve escalado al final
    if (buttons) {
        tl.from(buttons, {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.5)"
        }, "-=0.2");
    }
});




ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    snap: {
        snapTo: "section",
        duration: 0.4,       // ¡MÁS RÁPIDO!: El imán ahora viaja volando (baja de 1.2s a 0.4s)
        delay: 0.02,         // REACCIÓN INMEDIATA: Solo espera 0.02 segundos tras dejar de scrollear para activar el imán
        ease: "power1.inOut" // Una curva más directa y veloz
    }
});
// Registrar SplitText solo si está disponible (no es parte de CDN público)
if (typeof SplitText !== "undefined") {
    gsap.registerPlugin(SplitText);
}

document.fonts.ready.then(() => {
    gsap.set("h1", { opacity: 1 });

    // helper: dividir cada elemento en spans por caracter
    function manualSplitToChars(selector) {
        const allChars = [];
        document.querySelectorAll(selector).forEach(el => {
            const text = el.textContent || "";
            const chars = Array.from(text);
            const html = chars.map(ch => {
                if (ch === " ") return '<span class="char">&nbsp;</span>';
                return `<span class="char">${ch}</span>`;
            }).join("");
            el.innerHTML = html;
            el.querySelectorAll('.char').forEach(c => allChars.push(c));
        });
        return allChars;
    }

    let charsToAnimate;
    if (typeof SplitText !== "undefined") {
        const headlineSplit = SplitText.create("h1", { type: "chars", charsClass: "char++" });
        charsToAnimate = headlineSplit.chars;
    } else {
        charsToAnimate = manualSplitToChars("h1");
    }

    // asegurarnos que cada caracter puede transformarse
    gsap.set(charsToAnimate, { display: 'inline-block' });

    gsap.from(charsToAnimate, {
        y: -100,
        opacity: 0,
        rotation: "random(-60, 60)",
        stagger: 0.04,
        duration: 2.9,
        ease: "back.out(2.7)",
        onComplete: () => {
            // Esta es la segunda fase: El flotado infinito
            gsap.to(charsToAnimate, {
                y: "+=12", // Las letras bajan 12px desde donde quedaron
                rotation: "random(-3, 3)", // Un balanceo súper sutil
                duration: 1, // Lento y relajado
                ease: "sine.inOut", // Este es el ease perfecto para simular flotar o respirar
                yoyo: true, // Hace que la animación vaya y vuelva de forma fluida
                repeat: -1, // -1 le dice a GSAP que sea infinito
                stagger: {
                    amount: 1.5,
                    from: "center" // El flotado empieza en el centro y se propaga a los lados
                }
            })
        }

    });
});
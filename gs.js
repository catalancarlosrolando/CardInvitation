
const splash = document.getElementById("splash");
const enterBtn = document.getElementById("splash-enter");
const floaters = gsap.utils.toArray(".splash-floater");
const leftWing = document.querySelector(".splash-wing-left");
const rightWing = document.querySelector(".splash-wing-right");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {


    if (leftWing && rightWing) {
        gsap.to(leftWing, {
            rotate: -14,
            duration: 0.9,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        gsap.to(rightWing, {
            rotate: 14,
            duration: 0.9,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
}

const dismissSplash = () => {
    gsap.to(splash, {
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
            splash.style.display = "none";
            document.body.classList.remove("splash-lock");
        }
    });
};

enterBtn.addEventListener("click", dismissSplash);
splash.addEventListener("click", (event) => {
    if (event.target === splash || event.target.classList.contains("splash-stage")) {
        dismissSplash();
    }
});

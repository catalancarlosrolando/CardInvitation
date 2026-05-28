
// Configuramos una fecha objetivo (22 de agosto de 2026)
const targetDate = new Date(2026, 7, 22, 0, 0, 0, 0).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById('days').innerText = "00";
        document.getElementById('hours').innerText = "00";
        document.getElementById('minutes').innerText = "00";
        return;
    }

    // Cálculos matemáticos del tiempo restante
    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    // Renderizamos formateando con un cero inicial si es menor a 10
    document.getElementById('days').innerText = d < 10 ? '0' + d : d;
    document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
    document.getElementById('minutes').innerText = m < 10 ? '0' + m : m;
}

// Ejecutar inmediatamente y luego actualizar cada 1 minuto (60000 ms)
updateCountdown();
setInterval(updateCountdown, 60000);
const btnMusica = document.getElementById('btn-musica');
const audio = document.getElementById('audio-invitacion');
const iconoMusicaplay = document.getElementById('icono-musica');
const spinMusica = document.getElementById('spin-musica');
const splashbutton = document.getElementById('splash-enter');
const iconoMusicaPausa = document.getElementById('icono-pausa');

let isPlaying = false;

if (btnMusica && audio) {
    splashbutton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            // Detenemos la animación de disco girando
            spinMusica.classList.remove('opacity-100', 'animate-[spin_3s_linear_infinite]');
            spinMusica.classList.add('opacity-0');
            iconoMusicaplay.classList.remove('hidden');
            iconoMusicaPausa.classList.add('hidden');
        } else {
            audio.play();
            // Activamos la animación de disco girando
            spinMusica.classList.remove('opacity-0');
            spinMusica.classList.add('opacity-100', 'animate-[spin_3s_linear_infinite]');
            iconoMusicaplay.classList.add('hidden');
            iconoMusicaPausa.classList.remove('hidden');
        }
        isPlaying = !isPlaying;
    });
}

btnMusica.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        // Detenemos la animación de disco girando
        spinMusica.classList.remove('opacity-100', 'animate-[spin_3s_linear_infinite]');
        spinMusica.classList.add('opacity-0');
        iconoMusicaplay.classList.remove('hidden');
        iconoMusicaPausa.classList.add('hidden');
    } else {
        audio.play();
        // Activamos la animación de disco girando
        spinMusica.classList.remove('opacity-0');
        spinMusica.classList.add('opacity-100', 'animate-[spin_3s_linear_infinite]');
        iconoMusicaplay.classList.add('hidden');
        iconoMusicaPausa.classList.remove('hidden');
    }
    isPlaying = !isPlaying;
});
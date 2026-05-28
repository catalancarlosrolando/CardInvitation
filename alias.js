const alias = document.getElementById('btn-copiar');

alias.addEventListener('click', () => {
    const textoACopiar = document.getElementById('texto-alias').innerText;

    navigator.clipboard.writeText(textoACopiar).then(() => {
        document.getElementById('mensaje-copiado').classList.add('opacity-100');
        setTimeout(() => {
            document.getElementById('mensaje-copiado').classList.remove('opacity-100');
        }, 2000);
    });
});
function carregar() {
    var hj = new Date();
    const hora = hj.getHours();
    const foto = document.querySelector('.fotoHora')
    const texto = document.querySelector('.dizHora')

    if (hora >= 6 && hora <= 12) {
    foto.src = 'fotodia.png';
    texto.innerHTML = `agora são ${hora} horas`;
    document.body.style.background = '#b40000ff'
    } else if (hora >= 13 && hora <= 18) {
        foto.src = 'fototarde.png';
        texto.innerHTML =`agora são ${hora} horas`;
        document.body.style.background = '#8e8201ff'
    } else {
        foto.src = 'fotonoite.png';
        texto.innerHTML = `agora são ${hora} horas`;
        document.body.style.background = '#020c38ff'
    }
}

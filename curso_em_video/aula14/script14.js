function contar() {
    const NuI = Number(document.querySelector(".nInicio").value)
    const NuF = Number(document.querySelector(".nFim").value)
    const NuP = Number(document.querySelector(".nPasso").value)
    const resp = document.querySelector(".resposta")
    if (NuF == 0 || NuP == 0) {
        resp.innerHTML = 'ERRO - Falta dados';
    }else {
        resp.innerHTML = 'Contando: ';
        if (NuI > NuF) {
            for (let index = NuI; index >= NuF; index-= NuP) {
                resp.innerHTML += ` ${index} `;
            }
        }else{
            for (let index = NuI; index <= NuF; index+= NuP) {
                resp.innerHTML += ` ${index} `;
            }
        }
    }
}
function verificar() {
    const hj = new Date()
    const anoHj = hj.getFullYear()
    const ano = document.querySelector('.intIdade')
    const div = document.querySelector('.d1')
    const resposta = document.querySelector('.resposta')
    if (ano.value.length == 0 || ano.value > anoHj) {
        window.alert('Erro - Verifique seus dados')
    } else{
        const idade = anoHj - Number(ano.value)
        const genero = document.getElementsByName('radsexo')
        if (genero[0].checked) {
            resposta.innerHTML = `Sua idade é ${idade} e vc é homem`
            div.body.style.background = '#031061ff';
        } else if (genero[1].checked) {
            resposta.innerHTML = `Sua idade é ${idade} e vc é mulher`
            div.body.style.background = '#3b0361ff';
        }
    }
}
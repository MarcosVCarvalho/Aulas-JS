function gerartabu() {
    let num = document.querySelector('.numR')
    let res = document.querySelector('.resposta')
    if (num.value.length == 0){
        window.alert('Erro - Por favor digite um numero')
    } else {
        const n = Number(num.value)
        for (let index = 1; index < 11; index++) {
            let item = document.createElement('option')
            item.text = `${index} x ${n} = ${index * n}`
            res.appendChild(item)
        }
    }
}
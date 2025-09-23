let num = (document.querySelector('.nInicio'))
let lista = document.querySelector('.mosNum')
let res = document.querySelector('.d2')
let valores = []
function isNumero(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}
function islista(l, v) {
    if (v.indexOf(l) != -1) {
        return true
    } else {
        return false
}}

function add() {
    let n = Number(num.value)
    if (isNumero(n) && !islista(n, valores)){
        valores.push(n)
        let item = document.createElement('option')
        item.text = `valor ${n} adicionado`
        lista.appendChild(item)
        num.value = ''
        num.focus();
    } else {
        window.alert('valor invalido ou ja encontrado na lista')
    }}
num.value = ''
num.focus();

function analisar() {
    if (valores.length == 0) {
        window.alert('Sem itens para avaliar')
    } else {
        let total = valores.length
        let  maiorV = valores[0]
        let  menorV = valores[0]
        let soma = 0
        for (const v in valores) {
            soma += valores[v]
            if (valores[v] > maiorV);
                maiorV = valores[v]
            if (valores[v] < menorV) {
                menorV = valores[v]
            }
        }
        let media = soma / valores.length
        res.innerHTML = ''  
        res.innerHTML += `<p>Ao todos temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor foi ${maiorV}.</p>`
        res.innerHTML += `<p>A media foi ${media.toFixed(2)}.</p>`
        res.innerHTML += `<p>A soma dos valores foi ${soma}.</p>`
        
        
    }
}   

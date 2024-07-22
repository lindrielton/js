let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let valores = []


function verific(n){
    if(Number(n) >= 1 &&  Number(n) <= 100){
        return true
    } else 
        return false
}

function numerochecado (n, l) {
    if(l.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(verific(num.value) && !numerochecado(num.value, valores)){
        valores.push(Number(num.value))
        let item =  document.createElement('option')
        item.text = `${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    } else{
        window.alert('esse numero não pode ser adicionado')
    }
    num.value = ''
    num.focus()
}



function finalisar(){
    if(valores.length === 0){
        window.alert('adicione valores antes de finalizar')
    }else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        soma = 0
        media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]

        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> seus valores são ${tot} </p>`
        res.innerHTML += `<p> o menor valor é ${menor} </p>`
        res.innerHTML += `<p> o maior valor é ${maior} </p>`
        res.innerHTML += `<p> a soma de todos os valores é ${soma}`
        res.innerHTML += `<p> a media dos numeros é ${media} </p>`
    }

    
}
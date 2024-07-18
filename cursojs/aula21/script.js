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
        window.alert('valor adicionado')
    } else{
        window.alert('esse numero não pode ser adicionado')
    }
}
function somar(){
    var nome = window.document.getElementById('inome')
    var n1 = window.document.getElementById('nota1')
    var n2 = window.document.getElementById('nota2')
    var n3 = window.document.getElementById('nota3')
    var soma = ( Number(n1.value) + Number(n2.value) + Number (n3.value))/3
    var res = window.document.getElementById('res')
    if (soma >= 7){
       
        res.style.color = 'blue'
        res.style.textAlign = 'center'
        window.document.body.style.background = 'black'
        res.innerHTML = `parabéns  vc está aprovado, sua media final é ${soma}`
    }else {
        res.style.color = 'red'
        res.style.textAlign = 'center'
        window.document.body.style.background = 'yellow'
        res.innerHTML = `infelismente vc está reprovado sua media fina é ${soma}`
    }
}
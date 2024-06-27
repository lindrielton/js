var hora = new Date()
var tempo = hora.getHours()
console.log(`são exatamente ${tempo} horas`)
if (hora < 12){
    console.log('bom dia')
} else if (hora <= 18){
        console.log('boa tarde')
} else {
    console.log('boa noite')
}


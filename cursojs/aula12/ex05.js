var dia = new Date()
var semana = dia.getDay()
switch (semana){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda-feira')
        break
    case 2:
        console.log('terça-feira')
        break
    case 3:
        console.log('quarta-feira')
        break
    case 4:
        console.log('quita-feira')
        break
    case 5:
        console.log('sexta-feira')
    case 6:
        console.log('sabado')
        break
    default : 
        console.log('dia invalido')
        break
}
let num1 = window.document.getElementById('inum')
let nume = window.document.getElementById('nume')
let re = window.document.getElementById('res')

function clicar(){
    if(Number(num1.value.length == 0) && Number(nume.value.length == 0)){
        window.alert('os numeros não foram inceridos')

    }else if( Number(num1.value.length != 0 && Number(nume.value.length == 0))){
        window.alert('coloque corretamente os numeros no canpo acima')

    }else if(Number(num1.value.length == 0 && Number(nume.value.length != 0))){
        window.alert('vc tem certeza que prencheu tudo corretamente!?')
    }
    if(Number(num1.value && Number(nume.value))){
        soma =  Number(num1.value) +  Number(nume.value)
        re.innerHTML += `<p> a soma é ${soma} </p>`
       
    }
    if (soma % 2 == 0){
        re.innerHTML += ` <p>resultado é par</p>`
    }else {
       re.innerHTML  += `<p>resultado é inpar </p>`
    }

}

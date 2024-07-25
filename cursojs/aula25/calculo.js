let num = window.document.getElementById('num')
let texto = window.document.getElementById('res')
let vet = []

function adicionar(n){
    if(Number(num.value >= 1)){
        n = num.value
        vet = n*n
        fat = Number(n)+ Number (n)
        texto.innerHTML += `<p> seu numero é ${n.length} </p>`
        texto.innerHTML += `<p>ele multiplicado por ele é ${vet}</p>`
        texto.innerHTML += `<p> ele somado por ele mesmo é ${fat}`   
    }

    if(n >= 10){
        for(pos in n){
            texto.innerHTML += ` a posiçao ${pos} tem  ${n[pos]}`
        }
    }

  
    

    

   
}

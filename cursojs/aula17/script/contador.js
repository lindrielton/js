function verificar(){
    var inicio = window.document.getElementById('inum')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res') 
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.legth== 0){
        window.alert('numeros invalidos')
    }else{
        res.innerHTML = 'contando <br>'
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passo.value)

        if(p == 0){
            window.alert('passo invalido, considerando passo 1')
            p = 1
        }
        
        if ( i < f) {
            //contagem crecente
            for( var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
                
            }

        } else {
            //contagen regreciva
           for( var c = i; c >= f; c-= p){
            res.innerHTML += `${c} \u{1F449} `
           }
        }
         res.innerHTML += '\u{1F4CD}'

        
        
    }
}   
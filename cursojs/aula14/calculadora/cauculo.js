function calcular(){
    var nome = window.document.getElementById('nome')
    var altura = window.document.getElementById('altura')
    var peso =  window.document.getElementById('peso') 
    var res = window.document.getElementById('res')
    var n1 = Number.parseFloat(altura.value)
    var p1 = Number.parseFloat(peso.value)
    var imc = p1/(n1*n1)
    

    if(imc > 18 && imc < 24){
        
        res.style.color = 'white'
        res.style.fontSize = '18px'
        res.innerHTML = (`parabens  vc esta com o peso normal, sua media imc ${imc}`)
       
        

    }else if (imc >= 25 && imc <= 29){
        res.style.color = 'white'
        res.style.fontSize = '18px'
        res.innerHTML = (`infelismente detectamos que vc está pre obeso, sua media imc é ${imc}`)
        
       

    }else if (imc >= 30 && imc <= 34){
        res.style.color = 'white'
        res.style.fontSize = '18px'
        res.innerHTML = (`é melhor vc ir se cuidadr, pois vc já é obeso gral 1 sua media imc é ${imc}`)
        
       

    }else if (imc >= 35 && imc <= 39){
        res.style.color = 'white'
        res.style.fontSize = '18px'
        res.innerHTML = (`vc é um obeso gral 2, é sua media é ${imc}`)
        
        
    }
        
    
    
    
    
}
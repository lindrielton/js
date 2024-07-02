function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nas = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if( nas.value.length == 0 || nas.value > ano){
        window.alert('verifique os dados e tente novamente')
    }else{
       var rad = window.document.getElementsByName('igual')
       var idade = ano - nas.value
       if(rad[0].checked){
        res.innerHTML = `vc é mulher e sua idade é ${idade}`
        
       } else if (rad[1].checked){
        res.style.textAlign = 'center'
        res.innerHTML = `vc é homen é sua idade é ${idade}`
        
       }
     
       
       
    }
  


}
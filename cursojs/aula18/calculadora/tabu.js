function taboada(){
   var numero = window.document.getElementById('txtn')
   var res = window.document.getElementById('tab')
   if (numero.value.length == 0){
      window.alert('não existe numero para ser calculado')
   }else{
      var n1 = Number(numero.value)
      var c = 1
      
      while (c <= 10){
      //var item = document.createElement("option")
     // item.text = `${n1*c}`
      //res.appendChild = (item)
     
      res.innerText += `${n1} x ${c} = ${n1*c} `
      c++
     
        

      }
   }
   
}
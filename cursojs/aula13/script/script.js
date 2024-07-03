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
       var img = document.createElement('img')
       img.setAttribute ('id', 'foto')
       if(rad[0].checked){
        if (idade >= 0 && idade < 10){
            img.setAttribute('src','imagen/foto-criancaaml.png')

        } else if (idade <= 18){

            img.setAttribute('src', 'imagen/foto-jovemfm.png')

        } else if (idade <= 55){

            img.setAttribute('src', 'imagen/foto-mulher40.png')

        } else if (idade > 55 && idade < 100){

            img.setAttribute('src','imagen/foto-senhora.png')
        }
        res.style.textAlign = 'center' 
        res.innerHTML = `identificamos mulher com ${idade} anos`
        res.appendChild(img)
        
        
        
       } else if (rad[1].checked){
        if (idade >= 0 && idade < 10){
            img.setAttribute('src', 'imagen/foto-criancahm.png')

        } else if( idade < 18){

            img.setAttribute('src','imagen/foto-jovemhm.png')

        } else if (idade < 55){

            img.setAttribute('src','imagen/foto-homen40.png')

        } else if (idade > 55 && idade < 100 ){

            img.setAttribute('src', 'imagen/foto-senhor.png')
        }       
        res.style.textAlign = 'center'
        res.innerHTML = `identificamos homem com  ${idade} anos`
        res.appendChild(img)
        
       }
     
       
       
    }
  


}
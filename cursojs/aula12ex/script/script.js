function carregar(){
    var msg = window.document.getElementById('msg')
    var tempo = window.document.getElementById('imagens')
    var data =  new Date()
    var hora = data.getHours()
    msg.innerHTML = `a hora atual é ${hora} horas.`
   
    
    if (hora >= 0 &&  hora < 12){
        msg.innerHTML = 'bom dia com jesus'
        tempo.src = 'imagens/bomdia.png'
        document.body.style.background = '#FAD39E'

    }else if ( hora > 12 && hora <= 18){
        msg.innerHTML = 'boa tarde com maria'
        tempo.src = 'imagens/boatarde.png'
        document.body.style.background = '#F7A716'
    }else {
        msg.innerHTML = 'boa noite com Deus'
        tempo.src = 'imagens/boanoite.png'
        document.body.style.background = '#2D3347'
    }
}
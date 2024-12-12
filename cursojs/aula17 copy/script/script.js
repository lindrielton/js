function verificar(){
    idade = window.document.getElementById('txtano')
    fn = window.document.getElementById('ifem')
    mc = window.document.getElementById('mas')
    res = window.document.getElementById('res')

    soma = Number.parseFloat(2024 - idade.value  );
    if(fn.checked == true){
       res.innerHTML = (`VC É feminina DE IDADE ${soma}`)
    }else{
       res.innerHTML = (`vc é masculino de idade ${soma}`)
    }
}


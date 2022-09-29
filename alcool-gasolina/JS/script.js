function calcularMelhorPreco(){
          //validar campos
let precoAlcool = document.getElementById('alcool').value
let precoGsolina = document.getElementById('gasolina').value

if (precoAlcool != ""){
  
  if (precoGsolina != ""){
   let resultado = precoAlcool / precoGsolina
    if (resultado >= 0.7) {
    //alert("Melhor utilizar Gasolina")
    document.getElementById('resultado').innerHTML = "Melhor utilizar Gasolina"
    }else{
    //alert("Melhor utilizar Alcool")
    document.getElementById('resultado').innerHTML = "Melhor utilizar Alcool"
    }

}else{
  alert("Preencha o preço do gasolina")
  }
}else{
  alert("Preencha o preço do alcool")
}

}

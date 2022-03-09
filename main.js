minhafuncao = function (){

  var nome = window.prompt('Qual é o seu nome?')
  var SobNome = window.prompt('Qual é o seu sobrenome?')
  var NomeComp = nome + '' + SobNome
  window.alert(`Seja bem vindo(a) ${nome} !`)
  var idade = window.prompt('Qual é a sua idade?')
  var altura = window.prompt('Qual é a sua altura')
  var peso = window.prompt('Qual é o seu peso?')
  var alturaDiv = altura * altura
  var imc = (peso/alturaDiv)^0.5
  var somaNo = NomeComp.replace(/\s/g,'').length  
  var somaNoId = parseInt(somaNo) + parseInt(idade)
  var deathD = parseInt(idade) * parseInt(365.5)
  var deathH = parseInt(idade) * parseInt(8772)
  var deatM = parseInt(idade) * parseInt(526320)
  
  
  /* Possivel função para dar o numero do IMC e a resposta junto 
  mediaImc = function () {
      if (imc >= 18,5){
        "Abaixo"
      }
        else if ( imc >= 18,5 && imc <= 24,9){
        "Normal"   
        }
        else if ( imc >= 25 && imc <= 29,9){
        "Sobreso"
        }
         else if ( imc >= 30 && imc <= 34,9){
        "Obesidade"     
         }
       
       }
  */
  
  document.write(`${nome}!!!<br/> Seu IMC é: ${imc}
  <br/> Seu nome completo tem  ${somaNo} letras
  <br/> Se somar seu nome à sua idade o resultado é: ${somaNoId} 
  <br/> Você tem aproximadamente ${deathD} dias, ${deathH} Horas, <br/> e ${deatM} minutos de vida!`) 

}

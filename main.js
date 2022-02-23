minhafuncao = function (){

  var nome = window.prompt('Qual é o seu nome?')
  var SobNome = window.prompt('Qual é o seu sobrenome?')
  var NomeComp = nome + ' ' + SobNome
  window.alert(`Seja bem vindo(a) ${nome} !`)
  var idade = window.prompt('Qual é a sua idade?')
  var altura = window.prompt('Qual é a sua altura')
  var peso = window.prompt('Qual é o seu peso?')
  var imc = (peso/altura)^2

  document.write(
    `${nome}, seu IMC é: ${imc}`
  )
}
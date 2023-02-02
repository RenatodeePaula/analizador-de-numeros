let numeroDigitado = document.querySelector('input')
let add = document.querySelector('#add')
let panel = document.getElementById('panel')
let numerosGuardados  = []

const fim = document.querySelector('button #final')
let divFinalizar = document.getElementById('divFinal')  

// Função para verificar se o número digitado se encontra entre 1 e 100.
 function isNumber (guard) {
   if (guard >= 1 && guard <= 100) {
      return true
 
   } else  {
      return false
   }
 } 

// Função para verificar se tem número repedito no Array.
function numeroRepetido(guard, digit) {
      if (guard.indexOf(digit) == -1)  {
         return false
      } else {
         return true
      }  
}
// Função para adicionar os resultados de números digitados no input e verificar as condições aceitas.
function adicionar () {  
   let  numero = Number(numeroDigitado.value)
   if (isNumber(numero) && !numeroRepetido(numerosGuardados, numero)){  
      numerosGuardados.push(numero)
      let item = document.createElement('option')
      item.text = `Número  ${numero} adicionado!`

      panel.appendChild(item) 
      divFinalizar.innerHTML = ''
    

   } else {
      alert('Valor inválido ou já encontrado na lista!')
   }
   numeroDigitado.value = ''
   numeroDigitado.focus()
 }

function finalizar () { 
   
   if (numerosGuardados.length == 0) {
      alert("Adicione valores antes de finalizar!")
   } else {
      let  soma = 0  
      let  maiorNumero = numerosGuardados [0]
      let  menorNumero = numerosGuardados [0]
      let  media = 0
   
      for  (let cont in numerosGuardados ) {  
         if (numerosGuardados[cont] > maiorNumero) {
            maiorNumero = numerosGuardados[cont]
         } 
         
         if (numerosGuardados[cont] < menorNumero){
            menorNumero = numerosGuardados [cont]

         } 
          soma += numerosGuardados[cont]     
         media = soma / numerosGuardados.length  
      }   
      
      divFinalizar.innerHTML = ''
      divFinalizar.innerHTML += `
      <p>Ao todo, temos ${numerosGuardados.length} números cadastrados. </p>
      
      <p> O maior valor informado foi ${maiorNumero}. </p>

      <p> O menor valor informado foi ${menorNumero} </p>

      <p> Somando todos os valores, temos ${soma}. </p>

      <p> A média dos valores digitados é ${media.toFixed(2)} </p>
      `
   }  
}

   
   


 


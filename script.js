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
         return true
      } else {
         return false
      }  

}

// Função para adicionar os resultados de números digitados no input e verificar as condições aceitas.
function adicionar () {
   let  numero = Number(numeroDigitado.value)
   if (isNumber(numero) && numeroRepetido(numerosGuardados, numero)){    
      numerosGuardados.push(numero)
      let item = document.createElement('option')
      item.text = `Número  ${numero} adicionado!`

      panel.appendChild(item)   

   } else {
      alert('Número Inválido!!!')
   }
 }

function finalizar () {
   
   let soma = 0  
   let = maiorNumero = 0 
   let = menorNumero = 101
   let media = 0
   
   for (let cont = 0; cont < numerosGuardados.length ;  cont ++ ) {
      
      // Somar valores do array.
      soma = soma + numerosGuardados[cont]     
     
      
      // Verificar maior número digitado.      
      if (numerosGuardados[cont] > maiorNumero ) {
         maiorNumero = numerosGuardados[cont]
      }

      // Verificar menor número digitado.
      if ( numerosGuardados[cont] < menorNumero ) {
         menorNumero = numerosGuardados[cont]
      }
      
   }  

    // Verificar a média dos números digitados.

    media = soma / numerosGuardados.length
   
   
   
   // Adicionando texto dinâmico no parágrafo finalizar.
   let item2 = document.createElement('p')
   item2.innerText = `
   Ao todo, temos ${numerosGuardados.length} números cadastrados.
   
   O maior valor informado foi ${maiorNumero}.

   O menor valor informado foi ${menorNumero}

   Somando todos os valores, temos ${soma}.

   A média dos valores digitados é ${media}

   `
   
   divFinalizar.appendChild(item2)

}

 


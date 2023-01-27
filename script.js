let numeroDigitado = document.querySelector('input')
let add = document.querySelector('#add')
let panel = document.getElementById('panel')
let numerosGuardados  = []


 function isNumber (guard) {
   if (guard >= 1 && guard <= 100) {
      return true
 
   } else  {
      return false
   }

 }
 

 function numeroRepetido(guard, digit) {
      if (guard.indexOf(digit) == -1)  {
         return true
      } else {
         return false
      }

   }


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


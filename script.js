let numeroDigitado = document.querySelector('input')
let add = document.querySelector('#add')
let panel = document.getElementById('panel')
let numerosGuardados  = []


 function isNumber (num) {
   if (num >= 1 && num <= 100) {
      return true
 
   } else  {
      return false
   }

 }

 function adicionar () {
   if (isNumber(Number(numeroDigitado.value)) ){
      alert('Número digitado ok!')
   } else {
      alert('AHHHHHHHHHHHHHHHHHHHHHHH!!!')
   }
 }


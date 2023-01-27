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

//  function mesmoNumero() {
//    if () {

//    }

//  }

 function adicionar () {
   if (isNumber(Number(numeroDigitado.value)) ){    
     let  numero = Number(numeroDigitado.value)
         numerosGuardados.push(numero)
         let item = document.createElement('option')
         item.text = `Número  ${numerosGuardados.value} adicionado!`
         if(numerosGuardados.indexOf(numero)) {
           
            panel.appendChild(item)
         }
   
      
      
     

   } else {
      alert('AHHHHHHHHHHHHHHHHHHHHHHH!!!')
   }
 }


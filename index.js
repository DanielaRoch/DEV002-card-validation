import validator from './validator.js';
//crear una constante para cada id de mi html
const inputTarjeta= document.getElementById ('card-number')
const pNumeroT= document.getElementById ('numero-tarjeta')
const labelValidacion= document.getElementById ('validacion')
const pNombre= document.getElementById('card-name')
const labelNombre= document.getElementById('nombre-tarjeta')




inputTarjeta.addEventListener('input', function (evento) {
    var creditCardNumber= evento.target.value;
    pNumeroT.innerText= validator.maskify(creditCardNumber)
    var valid = validator.isValid(creditCardNumber);
    if (valid) {
        labelValidacion.innerText = " VALIDA"
    } else {
        labelValidacion.innerText = " INVALIDA"
    }
    
   
     });

pNombre.addEventListener('input',function (evento) {
    labelNombre.innerText=evento.target.value;
    
})








    

console.log(validator);

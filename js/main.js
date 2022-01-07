var form = document.querySelector('#form')
var input = document.querySelector('#mathc')
var turi = document.querySelector('#turi')
var hsoblash = document.querySelector('#resalt')

form.addEventListener('submit', function(event){
    event.preventDefault()


    hsoblash.textContent = input.value/turi.value

})
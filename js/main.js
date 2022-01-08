var form = document.querySelector('#form')
var input = document.querySelector('#mathc')
var xato = document.getElementById('xato')
var turi = document.querySelector('#turi')
var hsoblash = document.querySelector('#resalt')

form.addEventListener('submit', function(event){
    event.preventDefault()

    var a = input.value
    var b = turi.value
    

    if(a< 100000){
        xato.textContent='100000 so\'mdan past qimat hisoblanmaydi!!!'
        xato.style.color='red'
        
    }else{
        hsoblash.textContent = a/b
        hsoblash.style.color='green'
        xato.style.color='white'

       
        
    
       
    }
    
         

  

})
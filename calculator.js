let buttons = document.querySelectorAll('.buttons')
let screen = document.getElementById('cal-screen');
let screenValue =''

buttons.forEach((button) => {
    //  console.log(button)
    button.addEventListener('click', e => { buttonText= e.target.innerHTML;
        
        if(buttonText == 'X'){
            buttonText = '*'
            screenValue += buttonText
            screen.value = screenValue
        }
        else if(buttonText =='C'){
            screenValue = ''
            screen.value = screenValue
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue)

        }
        else if(buttonText == 'back'){
            screenValue = screenValue.slice(0,-1)
            screen.value = screenValue
        }
        else{
            screenValue += buttonText
            screen.value = screenValue
            
        }
        })

        
})
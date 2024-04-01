
let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let numOne = '';
let numTwo = '';
let numHolder = '';
let operator = '';

buttons.forEach(button => button.addEventListener('click', handleButtonClick));

function calculate(numOne, numTwo, operator){
    if(operator == '+'){
        display.textContent = Number(numOne) + Number(numTwo);
    }
    else if(operator == '-'){
        display.textContent = Number(numOne) - Number(numTwo);
    }
    else if(operator == '*'){
        display.textContent = Number(numOne) * Number(numTwo);
    }
    else if(operator == '/'){
        display.textContent = Number(numOne) / Number(numTwo);
    }
}

function handleButtonClick(e){
    let btnTarget = e.target;
    let btnValue = btnTarget.textContent;

    if(btnTarget.id == 'num-btn'){
        display.textContent += btnValue;
    } 
    if(btnTarget.id == 'op-btn'){
        numOne = display.textContent;
        operator = btnValue;
        display.textContent = '';
    } 
    if(btnTarget.id == 'eq-btn'){
        numTwo = display.textContent;
        calculate(numOne, numTwo, operator);
    }
    if(btnTarget.id == 'cls-btn'){
        display.textContent = '';
        numOne = '';
        numTwo = '';
        operator = '';
    }
}
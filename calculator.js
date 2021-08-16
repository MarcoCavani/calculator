let runningTotal = 0;
let buffer = '0';
let previousOperator = null;

let button = document.querySelector('.calc-buttons');

const screen = document.querySelector('.screen');


function buttonClick(value){
    
    if(isNaN(value)){
        //this is not number
        handleSymbol(value);
    }

    else{
        //this is a number
        handleNumber(value);
    }
    screen.innerText = buffer;
    
        
}


function handleSymbol(symbol){

    switch(symbol){
        case 'c':
            buffer = '0'
            runningTotal = 0;
            break;
        case '=':
             
            if(previousOperator === null){
                // you nedd two nuber to do math
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break; 
        case '←':
            if(buffer.length === 1){
                buffer = '0';
            }else{
                
                buffer = buffer.substring(0, buffer.length - 1);
                break;
            }
        case '÷':
        case '−':
        case '×':
        case '+':
            handleMath(symbol);
            break;
    }

}

function handleMath(symbol){
    if (buffer === '0'){
        //do nothing
        return;
    }
    const intBuffer = parseInt(buffer);

    if (runningTotal === 0){
        runningTotal = intBuffer;
    }else{
        flushOperation(intBuffer);
    }
    previousOperator = symbol;

    buffer = '0';
}

function flushOperation(intBuffer){
    
    
    if (previousOperator === '+'){
        console.log(runningTotal += intBuffer);
    }
    else if (previousOperator === '−'){
        console.log(runningTotal -= intBuffer);
    }
    else if (previousOperator === '×'){
         console.log(runningTotal *= intBuffer);
    }
    else if (previousOperator === '÷'){
        console.log(runningTotal /= intBuffer);
    }
    

}


function handleNumber(numberString){
    if(buffer === '0'){
        buffer = numberString;
    }else{
        buffer += numberString;   
    }

}

function init(){
    button.addEventListener('click', function(event){
        buttonClick(event.target.innerText); 
        

    })
}



init();


let prevInput ='0';
let calculationOperator ='';
let currentInput ='0';

const inputNumber =(number) =>{
    if(currentInput ==='0'){
      currentInput =number;   
        
} else{
   currentInput +=number;  
}
   
}



const numbers =document.querySelectorAll(".number");
numbers.forEach((numbers) => {
    
    
    numbers.addEventListener("click",(event) =>{
        inputNumber(event.target.value);
        console.log(event.target.value);
        updateScreen(currentInput);
    })
    
  
});



const calculatorScreen =document.querySelector(".calculator-screen");

const updateScreen =(number) =>{
    
    calculatorScreen.value=number;
}

const operators =document.querySelectorAll(".operator");
operators.forEach((operators) =>{
    operators.addEventListener("click",(event) =>{
        console.log(event.target.value);
        inputOperator(event.target.value);
    })
})



const inputOperator=(operator) =>{
    prevInput=currentInput;
    calculationOperator =operator;
    currentInput ='0';
    
}

const equalSign =document.querySelector(".equal-sign");
equalSign.addEventListener('click',() =>{
    console.log(event.target.value);
    calculate();
    updateScreen(currentInput);
})

const calculate =() =>{
    let result=0;
    switch(calculationOperator){
        case '+':
            result =parseFloat(prevInput) + parseFloat(currentInput);
            break;
            
             case '-':
            result =parseFloat(prevInput)  - parseFloat(currentInput);
            break;
            
             case '*':
            result =parseFloat(prevInput) *  parseFloat(currentInput);
            break;
            
            case '/':
            result =parseFloat(prevInput)   / parseFloat(currentInput);
            break;
            
             case '%':
            result =(parseFloat(prevInput)   / parseFloat(currentInput))*100;
            break;
            
            
        default:
            return
             
            
    }
    currentInput =result.toString();
    console.log(result);
    calculationOperator ='';
            
            
            
    }
    
    
    
    const  clearBtn =document.querySelector(".all-clear");

    clearBtn.addEventListener('click',() =>{
        clearAll();
       updateScreen(currentInput); 
         
    })

const clearAll =() =>{
    prevInput='0';
    calculationOperator='';
    currentInput='0';
}
    
    
    




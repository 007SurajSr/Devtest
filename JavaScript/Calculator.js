function calculator(){
    const Operator = '-';
    const num1 = 45;
    const num2 = 7;
    if(Operator=='+'){
        result = num1+num2;
    }
    else if(Operator=='-'){
       result = num1- num2; 
    }else if(Operator=='*'){
        result = num1* num2; 
     }else {
        result = num1 / num2; 
     }
     console.log(result);
}
calculator();
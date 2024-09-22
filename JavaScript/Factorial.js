function factorial() {
   
      const inputValue = 5;
    var fact = 1;
    if (inputValue<=0){
        console.log(`Factorial of ${inputValue} is not possible`);
    }
    else{
        for(let i=1; i<=inputValue; i++){
            fact = fact*i;
        }
        console.log(`Factorial of ${inputValue} is ${fact}`);
    }
    }
factorial();
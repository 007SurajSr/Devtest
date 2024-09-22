function primeNumber() {
    const number = 72;
    if(number==1){
        console.log(`${number} is neither prime nor composite`);
    }
    else if (number<1){
        console.log(`prime number of ${number} is not possible`);
   }
   else{
     for(let i=2; i<number; i++){
        if(number%i==0){
            var result = `${number} is not a prime number`;
            break;
        }
        else{
            var result = `${number} is prime number`;
        }
     }
     console.log(result);
   }
    
}
primeNumber();
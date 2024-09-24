function armstronNum() {
    var num = 371;
    var temp = num;
    var lengthOfDigit = num.toString().length;
    var sum = 0 ;
    while(temp>0){
        var digit = temp%10;

        sum += digit**lengthOfDigit;

        temp = parseInt(temp/10);
    }
    if( sum == num){
        console.log(`${num} is an Armstrong number `);
    }else{
        console.log(`${num} is not an Armstrong number `);
    }
}
armstronNum();
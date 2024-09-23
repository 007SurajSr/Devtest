function pallindrome(){
    var string = 'eye';
    string = string.toLocaleLowerCase();
    const checkPallindrome = (str) => {
       var reverseStr = str.split("").reverse().join("");
       if(str === reverseStr){
        return true;
       }
       else{
        return false;
       }
    }
    console.log(checkPallindrome(string));
}
pallindrome();

 
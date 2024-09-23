function reverseString(){
    const string = 'butter';
    const reverseStr =(str) => {
        var strToArray = str.split("");
        var arrReverse = strToArray.reverse();
        var arrayToString = arrReverse.join("");
        return arrayToString;
    }
    console.log(reverseStr(string)); 
}
reverseString();
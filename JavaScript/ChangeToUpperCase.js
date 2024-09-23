//Function to be usesd  

//charAt() :to get a character at an index  
//toUpperCase() :to uppercase character  
//map() :to return a new array  
//slice() :to slice any character from string  KAPWING

function toUpperCase () {
    var inputValue = 'hello suraj kese ho tum';
    // const changeToUpper = inputValue.toUpperCase();
    const firstLetterUpper = (str) => {
        var newStr = str.split(" ");
        var newArr = newStr.map((value) => {
            return value.charAt(0).toUpperCase() +value.slice(1)
        } );
        return newArr.join(" ");
    }
    console.log(firstLetterUpper(inputValue));
}
toUpperCase();
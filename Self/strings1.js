// N-1. Function to check it the second string can be made from the first string.


function canMakeStr2( str1, str2)
{
    let count = {};

    for (let i = 0; i<str1.length; i++){
        if(str1[i] in count)
            count[str1[i]]++;
        else
        count[str1[i]] = 1
    }
    for (let i = 0; i < str2.length; i++){
        if(count[str2[i]] == 0 || !(str2[i] in count))
            return false;
        count[str2[i]]--;
    }
    return true;
}

let str1 = "surajgupta";
let str2 = "shashank";

if (canMakeStr2(str1, str2))
   console.log("yes");
else
console.log("No");


// N-2. Function to reverse the String.

function reverseStr (){
    str3 = str3.split(' ').reverse().join(' ');
    console.log(str3);
}

let str3 = "S u r a j G u p t a";
reverseStr();

// N-3. To remove the the Duplicate elements from array.

function removeDuplicate(){
    uniquiArray = [...new Set(arr)];
   
   
    console.log(uniquiArray);
}
let arr = '1 2 4 5 1 2 4 5 2 5 8';
 
  
removeDuplicate();
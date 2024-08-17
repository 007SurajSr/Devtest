// Function to check it the second string can be made from the first string.


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
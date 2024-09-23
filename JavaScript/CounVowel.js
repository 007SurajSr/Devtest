function checkVowels() {
    var string = 'O';
    string=string.toLowerCase();
    if(string=='a'||string=='e'||string=='i'||string=='o'||string=='u'){
        console.log(`${string} is vowel`)
    }
    else{
        console.log(`${string} is not a vowel`);
    }
}
checkVowels();

function countVowel(){
    const string = 'Suraj Amir';
    const vowels = ['a','e','i','o','u'];
    var count = 0;
    const countVowels = (str) => {
        for(let letter of str.toLowerCase()){
            if(vowels.includes(letter)){
                count++;
            }
        }
        return count;
    }
    console.log(countVowels(string));
}
countVowel();
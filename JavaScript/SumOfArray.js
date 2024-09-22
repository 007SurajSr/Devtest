function sumArray() {
    const array = [4,5,7,5,8,6,5,2,5];
    let sum = 0;
    for(let i=0; i< array.length; i++){
        sum += array[i];
    }
     console.log(sum);
}
sumArray();


// Alternate way of writing code for the same problem

function sumOfArray(){
    const array = [4,5,7,5,8,6,5,2,5];
    const sumOf =(arr) => {
        return arr.reduce((pre,cur) => {
            return pre+cur;
        })
    }
    console.log(sumOf(array));
}
sumOfArray();
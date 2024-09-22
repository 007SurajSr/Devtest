function evenOddNums() {
    const arr = [1,4,2,5,7,8,9,6,3];
    const even = [];
    const odd = [];
    for(let i = 0;   i < arr.length; i++){
         
        if(arr[i]%2==0){
            even.push(arr[i]);
            console.log( 'Even numbers  ', + arr[i] );

        }
        else{
            odd.push(arr[i]);
            console.log('Odd numbers ', +  arr[i]);
        }
    }
    console.log(even);
    console.log(odd);
}
evenOddNums();

// 2. Another way of writing same code.
 
function oddEvenNums() {
    const array = [5,4,2,6,7,8,9,10,17];
    const even = array.filter((item) => {
        return item%2==0;
    })
    const odd = array.filter((item) => {
        return item%2==0;
    })
    console.log('Even numbers', even);
    console.log('Odd numbers', odd);
}
oddEvenNums();
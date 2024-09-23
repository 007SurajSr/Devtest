function checkArray () {
    const array1 = [2,9,6,8,4];
    const array2 = [4,8,6,9,2];
    const isArraySame = array1.length == array2.length &&

    // indexOf method returns -1 if element is not exist in array
    // every method check each and every element fulfil the condition exist in array

    array1.every((curEle) => {
        if(array2.indexOf(curEle)>-1){
            return(curEle=[array2.indexOf(curEle)])
        }
    })
    console.log(isArraySame);
}
checkArray();
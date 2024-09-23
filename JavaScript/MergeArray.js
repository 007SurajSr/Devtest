function mergeArray() {
    const array1 = ['4','51','96','47','44','24'];
    const array2 = ['8','1','9','7','96','23'];

    // concat

    const finalArray = array1.concat(array2);
    const sortArray =finalArray.sort(function(a,b){
        return a-b;
    })
    console.log(sortArray);

    //spread Operator

    const mergedArray = [...array1,...array2];
    const sortArray2 = mergedArray.sort(function(a,b){
        return a-b;
    })
    console.log(sortArray2);
}
mergeArray();
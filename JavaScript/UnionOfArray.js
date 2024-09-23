function UnionArray() {
    var array1 = [2,9,6,5,7,4,2,5,45];
    var array2 = [4,8,12,44,45];
    var unionArr = [...array1,...array2];
    var sortArray = unionArr.sort(function(a,b) {
        return a-b;

    })
    
    console.log([...new Set(sortArray)]);
}
UnionArray();
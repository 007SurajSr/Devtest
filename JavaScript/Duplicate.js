//To print duplicate element from the array.

function dupArr(){
    const Array = [ 1,2,4,5,4,2,1,4,5,2,5];
    const duplicate = Array.filter((ele,index,arr)=>arr.indexOf(ele)!==index);
    console.log(duplicate);
}
dupArr();

//To remove the duplicate element from the array.
function removeDup() {
    const Array = [1,2,4,5,4,2,1,4,5,2,5 ];
    const removeDup = Array.filter((ele, index, arr)=> arr.indexOf(ele)==index);
    console.log(removeDup); 
}

removeDup();
// To find the second largest value from the given array.

function secondLargest() {
    const Array = [4,1,5,2,51,545,54,];
    const LargestValue = (arr) => {
        firstLargestValue = Math.max(...arr);       // Step.1 - To fine the largest value from the array.
        index = arr.indexOf(firstLargestValue);     // Step.2 - To find the index of that first largest value.    
        arr.splice(index,1);                        // Step.3 - Delete that element from the array using the slice method.
        secondLargestValue = Math.max(...arr);
        return(secondLargestValue);
    }
    console.log(LargestValue(Array));
}
secondLargest();
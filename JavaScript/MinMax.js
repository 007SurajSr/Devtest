//Function to find out minimum and maximum values from the given array.

function maxArray(){
    const Array = [1,45,47,2,5,4,7,88,9,5457];
    const maxFunc = (arr)=>{
        return arr.reduce(function(pre,cur){
            return pre>cur? pre:cur;
        })
    }
    
     //B another method to find maximum value.

    const largestValue  = (arr) => {
        firstLargestValue = Math.max (...arr);
        return(firstLargestValue);
    }
    console.log(largestValue(Array));
    console.log(maxFunc(Array));
}
maxArray();

function minArray() {
    const Array = [1,45,47,2,5,4,7,88,9,5457];
    const minFunc = (arr) => {
        return arr.reduce(function(pre,cur){
            return pre<cur?pre:cur;
        })
    }

    // B. another method to find minimum value.

    const smallestValue = (arr) => {
        firstSmallestValue = Math.min(...arr);
        return(firstSmallestValue);
    }
    console.log(smallestValue(Array));
    console.log(minFunc(Array)); 
}
minArray();
// 1) Function to add element inside of an array.  
  
  function addArray() {
     const a = [3,4,3,5,1,1,2,3,4,9,6,7,7,9,11,56,65,56];
     let sum = 0;
     for ( let i = 0; i < a.length; i++){
        sum += a[i];
   }
     console.log(sum);
}

addArray();

// 2) Funtion to filter elements inside of an array.

function filterArray() {
   const arr = [3,4,3,5,1,1,2,3,4,9,6,7,7,9,11,56,65,56];
    
   const uniqueArray =   [...new Set(arr)];
   console.log(uniqueArray); 
}
  
filterArray();

function asceOrder() {
const uniqArr =  Array.sort(uniqueArray)
console.log(uniqArr);

}
asceOrder();
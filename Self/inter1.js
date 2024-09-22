// N-1. Sum of two integer numbers. 

// function sumOfTwoNum (){
//       a = 10;
//       b = 1000;
//       sum = a + b;
//       console.log(sum);
// }
// sumOfTwoNum();

// N-2.Can you write a function in JavaScript to calculate the cumulative sum of an array

function enterAsdd(){
    cumulativeSum = arr1.reduce((acc, num) => [...acc, acc.length ? acc[acc.length - 1] + num : num], [] );
    console.log(cumulativeSum);
}
arr1 = '12, 14, 45, 78, 56, 85 ';
 enterAsdd();
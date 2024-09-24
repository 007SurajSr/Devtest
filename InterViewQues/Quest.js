// 1.Which result will first print on console.log

// function timer() {
//  console.log(1);
 
//  setTimeout(() => {
//     console.log(2)
//  }, 4000);

//  setTimeout(() => {
//     console.log(3)
//  },0);

//  console.log(4);

// }
// timer();

//2. What will be the output of this SetoutPut Function.

// function timer2 () {
//     var i = 10;
//     setTimeout(() => {
//        /// var i = 10 ;
//         console.log(i);     // '.' Hoisting   we can not print any variable before assinging it.
//        //var i = 10; 
//     }, 1000);
// }
// timer2();

// 3. What is the output of this function

// function count1() {     //To check if you know about 'let' and 'const' variables.
//     let count = 0;
//     function printCount () {
//         if (count == 0){
//             let count = 3;
//             console.log("count1", count);
//         }
//         console.log("count2", count);
//     }
//     printCount();
// }
// count1();

// 4. What is the output of this function

// function outPut() {
//     console.log(2+ '2'); // 2+ is integer and '2' string -> 2+ will get changed in string -> concationatin will be done == 22 
//     console.log(2-'2');  // 2- is integet and '2' is string -> '2' will get changed in integer -> substraction will be done == 0 
//     console.log('2'-2);  // '2' is string and -2 is integer -> '2' will get changed in integer -> substraction will be done == 0
// }
// outPut();

// 5.  map vs ForEach Difference

function diff() {
  const arr = [1, 2 , 3 ,4 ,5]; 
  const mapMethod = arr.map((res) => {
    return res+5;
  })
  const forEachMethod = arr.forEach((res,i) => {
    arr[i] = res+7; 
  } )
  console.log(mapMethod,arr);
}
diff();
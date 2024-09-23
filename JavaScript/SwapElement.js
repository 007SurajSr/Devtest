function swapEle() {
    let a = 17;
    let b = 8;

    //Using third variable

    // let temp = a;
    // a = b;
    // b = temp;
    // console.log(`value of a is ${a} and value of b is ${b}`);

   // Without using third variable

   [a,b]=[b,a];
   console.log(`value of a is ${a} and value of b is ${b}`);

}
swapEle();
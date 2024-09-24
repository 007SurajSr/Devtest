function fibbonaci() {
var a = 0;
var b = 1;
for(let i = 0; i<=15; i++){
    var temp = a+b; //0+1=1
    a = b;  //0+1 a=>1
    b = temp; // 0+1 b=>1 
    console.log(temp);
}
 
}
fibbonaci();
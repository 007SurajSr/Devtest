// Function to write a table of 'n'th number.

function tables() {
    let m = 3;
    for (let n = 1; n <= m; n++) {
        for (let i = 1; i <= 10; i++) {
            console.log(n + " * " + i + " = " + n * i);
        }
    }
}
tables();

function table(){
    let s = 7;
    for (let a = 0; a <= 10; a++ ){
        console.log(s + " * " + a + " = " + a*s );
    }
}
table();
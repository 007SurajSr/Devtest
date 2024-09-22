// How to fing missing element in the given array.

function missingEle() {
    const array = [1,2,3,5,6,8,9,10];
    const missArray = [];
    const missingValue = (arr) => {
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
    for (let i=minValue; i<maxValue; i++ ){
        if(arr.indexOf(i)<0){
            missArray.push(i);
        }
    }
    return(missArray);
    }
    console.log(missingValue(array));
}
missingEle();
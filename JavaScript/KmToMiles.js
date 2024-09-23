// 1 kilometer = 0.621371

function changeUnits () {
    var inputValue = 100;
    const factor = 0.621371
    const kilometerToMiles = inputValue*factor;
    console.log(`${inputValue} km is equal to ${kilometerToMiles}`);
}
changeUnits();

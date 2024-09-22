function filter (){
    const empArray = [
        {name : "King", age : 42},
        {name : "Alisha", age : 24},
        {name : "Harinder", age : 26},
        {name : "Ketan", age : 41},
        {name : "Komal", age : 25},
        {name : "Kanhaiya", age : 58},
        {name : "Keshav", age : 27},
        {name : "Kusum", age : 24},
        {name : "Ramesh", age : 26} ];

    const filterItem = empArray.filter((item) => {
        return item.age>25;
    })

    const findItem = empArray.find((item) =>{
        return item.age>10;
    })
    console.log(filterItem);
    console.log(findItem);
}
filter();
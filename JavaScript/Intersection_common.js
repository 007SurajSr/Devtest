function commonEle () {
    var array1 = [2,9,6,5,7,4,2,5,45];
    var array2 = [4,8,12,44,45];
    let interSectionArray = array1.filter((ele) => {
        return array2.includes(ele)
    })
    console.log([...new Set(interSectionArray)])
}
commonEle();
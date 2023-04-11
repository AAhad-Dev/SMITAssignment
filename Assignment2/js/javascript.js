function idtArr(arr, val) {
    if (arr.length === 0) {
        return false;
    } else if (arr[0] === val) {
        return true;
    } else {
        return idtArr(arr.slice(1), val);
    }
}
let arr=[0,1,2,3,4,5];
console.log(idtArr(arr,1));

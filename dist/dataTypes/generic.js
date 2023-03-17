// Generic gen ne ric
function showStringData(a) {
    return a;
}
function showNumberData(a) {
    return a;
}
function showData(a) {
    return a;
}
showData("string");
// 
var arrNum = [1, 2, 3, 5, 8, 13]; //Fibonacci
var arrStr = ["Duy", "Minh", "Văn", "Vũ"];
// function WE17304_map(arr: number[], callback: (item: number) => number):number[] {
//     let temp = []
//     for(let i =0; i< arr.length; i++){
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp
// }
// function we17304_map<T>(arr: T[], callback: (item: T) => T):T[] {
//          let temp = []
//          for(let i =0; i< arr.length; i++){
//             const newItem = callback(arr[i])
//         temp.push(newItem)
//         }
//          return temp
//     }
// const result1 = we17304_map(arrStr, (item)=>{
//     return item + " - WE17304"
// })
// console.log(result1);
// -------------------------------------------------------------
// const arrNum2 = [12, 2, 32, 5, 8, 13];
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) { // so sánh lớn hơn để sắp xếp giảm dần
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
// }
// selectionSort(arrNum2);
// console.log(arrNum2); 
// arrNum2.sort((a, b) => { 
//     return a - b
// })
// console.log(arrNum2);
// ----------------------------------------------------------
// const arrNum2 = [12, 2, 32, 5, 8, 13];
// const selectionSort = (arr) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) { // so sánh nhỏ hơn để sắp xếp tăng dần
//                 [arr[i], arr[j]] = [arr[j], arr[i]]; // sử dụng destructuring assignment để hoán đổi giá trị
//             }
//         }
//     }
// }
// selectionSort(arrNum2); 
// console.log(arrNum2); 
// ------------------------


function ascendingOrder(a, b) {
    return a - b;
}
var sapxep = function (arr, callback) {
    var _a;
    if (!callback) {
        callback = function (a, b) {
            if (a > b) {
                return 1;
            }
            else {
                return -1;
            }
        };
    }
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (callback(arr[j], arr[i]) < 0) {
                _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
            }
        }
    }
    return arr;
};
sapxep(arrNum);
console.log(arrNum);
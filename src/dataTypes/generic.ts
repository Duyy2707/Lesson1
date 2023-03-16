// Generic gen ne ric
function showStringData(a:string): string {
    return a
}

function showNumberData(a: number):number{
    return a
}

function showData<T>(a: T): T {
    return a
}

showData<string> ("string")

// 
const arrNum = [1,2,3,5,8,13] //Fibonacci
const arrStr = ["Duy", "Minh", "Văn", "Vũ"]

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


// const arrNum2 = [12, 2, 32, 5, 8, 13];

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (()=>{

//       }) { // so sánh lớn hơn để sắp xếp giảm dần
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


const arrNum2 = [12, 2, 32, 5, 8, 13];


const selectionSort = (arr) => {

for (let i = 0; i < arr.length - 1; i++) {

for (let j = i + 1; j < arr.length; j++) {

if (arr[i] > arr[j]) { // so sánh nhỏ hơn để sắp xếp tăng dần

[arr[i], arr[j]] = [arr[j], arr[i]]; // sử dụng destructuring assignment để hoán đổi giá trị

}

}

}

}


selectionSort(arrNum2); // sắp xếp mảng arrNum2 theo thứ tự tăng dần


console.log(arrNum2); // [2, 5, 8, 12, 13, 32]
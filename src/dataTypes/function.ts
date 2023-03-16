// 1. Function declaration
 function fun1() {
    console.log("fun1");
    
 }
 const fun2 = function() {
    console.log("fun2");
    
 }
 const fun3=()=> {
    console.log("fun3");
    
 }
//  2.Functuon Return
function fun4(): string{
    return;
}
function sum(a: number): number {
    return a
}
function func5():void{
    console.log("Hello Wolrd");
    
}
function func6(): never {
    while(true) {

    }
}

function func7(): never {
    const error = new Error("Something went wrong!")
    throw error;
}
// 3. Function parameter
function divide(a:number, b?:number): number{
    if (b)  {
        return a - b
    }else{
        a
    }
}

function divide2(a:number, b:number =0): number{
    return a-b
}
divide(10)

// 4. Rest parameter
const showClasses = (name: string, ...classes:string[]): string =>{
    return`Sinh Viên ${name} học lớp ${classes.join(",")}`
}

console.log(showClasses("Phùng Minh", "Typescript", "Nodejs"));
console.log(showClasses("Duy", "Typescript"));

// 5.Callback
const num_arr = [5,6,7]
var temp = num_arr.map((item) =>{
    return item *2
})
// console.log(temp);

const WE17304_map = function(arr: number[], callback?: (item: number)=> number){
    const temp = [];
    for(let i=0; i<arr.length; i++){
        const newItem = callback(arr[i])
        temp.push(newItem)
    }
    return temp;
}
const result = WE17304_map(num_arr, (item)=>{
    return item * item
})
console.log(result);

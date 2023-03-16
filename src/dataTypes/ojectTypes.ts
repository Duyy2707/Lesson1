// Array
var arr: Array<string> = ["a", "b", "c"]
var arr2:number[][] = [[1 ,2 ,3], [4,5,6]]
var arr3:string[] = ["1", "2", "3"]
// any
let  str3:any = 10;
str3 = "Hello World"
str3 = [1,2,3];

// Tuples
const tuples: [string, string, number] = ["Duy", "Hà Nội", 20]
console.log(tuples);


// enum
enum STATUS {A, B, C}
const trangthai1: STATUS = STATUS.A
console.log(trangthai1);

enum CODE {D=200, E=400, F}
const code: CODE= CODE.F
console.log(code);

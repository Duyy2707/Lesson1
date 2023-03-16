// Array
var arr = ["a", "b", "c"];
var arr2 = [[1, 2, 3], [4, 5, 6]];
var arr3 = ["1", "2", "3"];
// any
var str3 = 10;
str3 = "Hello World";
str3 = [1, 2, 3];
// Tuples
var tuples = ["Duy", "Hà Nội", 20];
console.log(tuples);
// enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["A"] = 0] = "A";
    STATUS[STATUS["B"] = 1] = "B";
    STATUS[STATUS["C"] = 2] = "C";
})(STATUS || (STATUS = {}));
var trangthai1 = STATUS.A;
console.log(trangthai1);
var CODE;
(function (CODE) {
    CODE[CODE["D"] = 200] = "D";
    CODE[CODE["E"] = 400] = "E";
    CODE[CODE["F"] = 401] = "F";
})(CODE || (CODE = {}));
var code = CODE.F;
console.log(code);

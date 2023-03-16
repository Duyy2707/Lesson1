// 1. Function declaration
function fun1() {
    console.log("fun1");
}
var fun2 = function () {
    console.log("fun2");
};
var fun3 = function () {
    console.log("fun3");
};
//  2.Functuon Return
function fun4() {
    return;
}
function sum(a) {
    return a;
}
function func5() {
    console.log("Hello Wolrd");
}
function func6() {
    while (true) {
    }
}
function func7() {
    var error = new Error("Something went wrong!");
    throw error;
}
// 3. Function parameter
function divide(a, b) {
    if (b) {
        return a - b;
    }
    else {
        a;
    }
}
function divide2(a, b) {
    if (b === void 0) { b = 0; }
    return a - b;
}
divide(10);
// 4. Rest parameter
var showClasses = function (name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    return "Sinh Vi\u00EAn ".concat(name, " h\u1ECDc l\u1EDBp ").concat(classes.join(","));
};
console.log(showClasses("Phùng Minh", "Typescript", "Nodejs"));
console.log(showClasses("Duy", "Typescript"));
// 5.Callback
var num_arr = [5, 6, 7];
var temp = num_arr.map(function (item) {
    return item * 2;
});
// console.log(temp);
var WE17304_map = function (arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i]);
        temp.push(newItem);
    }
    return temp;
};
var result = WE17304_map(num_arr, function (item) {
    return item * item;
});
console.log(result);

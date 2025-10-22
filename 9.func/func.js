// 具名函数，通过名字func1来进行调用
function func1(x, y) {
    return x + y;
}
// 只传了1个参数，会编译报错
// func1(1);
var func3 = func1;
// 匿名函数，需要赋值给变量，使用func2变量名进行调用
var func2 = function (x, y) {
    return x + y;
};
// 无参无返回值的函数类型
var func4 = function () { };
function func5(success, msg) {
    if (msg === void 0) { msg = "未定义的异常"; }
    if (!success) {
        console.log(msg);
    }
}
// 编译正常，将输出 未定义的异常
func5(false);
function func6(a, b) {
    var other = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        other[_i - 2] = arguments[_i];
    }
    console.log(a, b, other);
}
//a b ['c', 'd']
func6("a", "b", "c", "d");
function func7(a) {
    if (typeof a === 'string') {
        console.log("执行参数为字符串的逻辑");
    }
    if (typeof a === 'number') {
        console.log("执行参数为数值的逻辑");
    }
    return a;
}
// 编译正常
var res1 = func7("Hello");
// 会报类型不匹配错误
var res2 = func7(6);

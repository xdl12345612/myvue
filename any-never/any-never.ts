// 先赋值为数值
var some:any = 1;
// 后修改为字符串
some = "Hello";

// 获取任意属性
some.a;
// 调用任意方法
// some.getA();

var some2;
some2 = 1;
some2 = "s";

var n:never;
// n = 4;

// 永远没有终点的函数
function loop():never {
    while(true){

    }
}
// 总是抛出异常的函数
function errorMsg(msg:string):never {
    throw Error(msg);
}
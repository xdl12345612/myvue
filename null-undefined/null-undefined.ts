var o1:string;
//将输出：undefined undefined
console.log(o1, typeof o1);

var o2 = {};
// undefined
console.log(o2["prop"]);

// function method(prop) {
//     console.log(prop);
// }
// method();

// 结果为undefined
var o3 = void "Hello";
console.log(o3);

// object
console.log(typeof null);


function func1():void {

}
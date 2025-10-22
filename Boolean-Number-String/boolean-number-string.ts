var isSuccess: boolean = true;
var isComplete = new Boolean(1);
var isPass: boolean = Boolean(0);
console.log(typeof isComplete);
console.log(typeof isComplete.valueOf(), isComplete.valueOf());

var num1: number = 6;
var num2: number = 3.14;
var num3: number = 0b1010;
var num4: number = 0o71;
var num5: number = 0xff;
var num5: number = Infinity;
var num6: number = NaN;

var str1: string = 'Hello';
var str2: string = "World";

var str3: string = `str1 is ${ str1 }
    str2 is ${ str2 }`;
console.log(str3);
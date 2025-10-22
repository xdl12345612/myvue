var some:any;
some = "hello";
console.log((<string>some).length);
console.log((some as string).length);

var some2:number| string;
some2 = "123";

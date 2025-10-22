var list1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var list2: Array<string>  = ["a", "b", "c"]

var tuple1: [string, number] = ["lixiang", 26]
tuple1.push("TypeScript");
tuple1.push(1101);
//name is XiaoMing, age is 25
console.log(`name is ${tuple1[0]}, age is ${tuple1[1]}`);

tuple1[0] = "DaShuai"

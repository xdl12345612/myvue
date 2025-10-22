var Result;
(function (Result) {
    Result[Result["Success"] = 10] = "Success";
    Result[Result["Fail"] = 20] = "Fail";
})(Result || (Result = {}));
// Success
console.log(Result[10]);
// Fail
console.log(Result[20]);
// 10
console.log(Result["Success"]);
// 20
console.log(Result["Fail"]);
// {10: 'Success', 20: 'Fail', Success: 10, Fail: 20}
console.log(Result);
var res = Result.Fail;
// 将输出：0
console.log(res);
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
var direction = Direction.Down;
// 将输出： Down
console.log(direction);
var mut = 10;
// 常量
var Rank;
(function (Rank) {
    Rank[Rank["A"] = 1] = "A";
    Rank[Rank["B"] = 6] = "B";
    Rank[Rank["C"] = mut * 2] = "C";
})(Rank || (Rank = {}));
// 20
console.log(Rank.C);
mut = 30;
// 20
console.log(Rank.C);
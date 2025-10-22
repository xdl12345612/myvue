enum Result {
    Success = 10,
    Fail = 20
}
// Success
console.log(Result[10]);
// Fail
console.log(Result[20])
// 10
console.log(Result["Success"]);
// 20
console.log(Result["Fail"]);
// {10: 'Success', 20: 'Fail', Success: 10, Fail: 20}
console.log(Result);

var res:Result = Result.Fail;
// 将输出：0
console.log(res);

enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

var direction: Direction = Direction.Down;
// 将输出： Down
console.log(direction);

var mut = 10;
// 常量
enum Rank {
    A = 1,
    B = 3 * 2,
    C = mut * 2
}
// 20
console.log(Rank.C);
mut = 30;
// 20
console.log(Rank.C);

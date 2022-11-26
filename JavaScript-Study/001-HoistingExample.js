// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;

// Functions
console.log(addDecl(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

// VM40:1 Uncaught ReferenceError: addExpr is not defined
// Hoisting 되긴 하는데, const type value 라서 Temporal Dead Zone 발생
console.log(addExpr(2, 3));
const addExpr = function (a, b) {
  return a + b;
};

console.log(addVarExpr(2, 3));
var addVarExpr = function (a, b) {
  return a + b;
};
// /Uncaught TypeError: addVarExpr is not a function
// var addVarExpr -> Hoisitng & undefined
// 따라서 undefined를 함수형태로 호출하려 하니 타입 에러가 발생

const addArow = (a, b) => a + b;

// Example
// numProducts => undefined
if (!numbProducts) deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
console.log(x === window.x);
let y = 2;
console.log(y === window.y);
const z = 3;
console.log(z === window.z);
// use Const -> and Let 꼭 바꿔야 하는 코드에서만.. -> var 걍 쓰지 말자.
// function declaration 이라도 선언 전에 변수를 사용하지 말자.

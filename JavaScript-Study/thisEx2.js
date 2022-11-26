// 2022-11-26 JavaScript-Study
// 💡 Object Method in Arrow Function
"use strict";
const jonas = {
  fisrtName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  // this = window object. window object 에는 firstName이 정의되지 않음.
  // 따라서 undefined를 호출하게 된다.
  // global Scope에서 this.firstName 하는 것과 정확히 동일하게 동작함.
  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet();
// jonas Object greet Method()를 호출 시 "Hey undefined"를 호출한다.
// 왜냐하면 arrow Function에서 this는 상위 parent Scope를 호출하기 때문이다.
// 하지만 jonas object의 { } 는 code block이 아닌 Object literal이다.
// 따라서 globe Scope를 호출하게 되는 것이다.
// var Keyword를 사용할 수 있지만 사용하지 않는 것 처럼, Object 에서 Method로서
// errow Function은 사용하지 않는 편이 바람직하다.

// 💡 Object in Regular Function
console.log("Object in Regualr Function");
const jonas2 = {
  fisrtName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
};
// regular function 안에서 this keyword를 호출할 시 parent Scope를 리턴한다.
// 비록 this keyword가 object의 method 안에 정의되어 있다고 하더라도
// 결과는 동일하다.
jonas2.calcAge();

// 🔑 Solution1 - [ES5 Style] Use Extra Variable
console.log("Solution1");
const jonas21 = {
  fisrtName: "Jonas",
  year: 1991,
  calcAge: function () {
    const self = this; // Solution
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
};
jonas21.calcAge();
// 첫 번째 솔루션은 regular function 외부의 method scope 에서 this 키워드를 가지는
// 변수 하나를 선언 한 뒤 이를 이용하는 것이다.

// 🔑 Solution2 - [ES6 Style] Use Errow Function
console.log("Solution2");
const jonas22 = {
  fisrtName: "Jonas",
  year: 1991,
  calcAge: function () {
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
};
jonas22.calcAge();
// 두 번째 솔루션은 Errow Function을 이용하는 것이다.
// Errow Function 내부의 this는 parent Scope를 호출한다.
// isMillenial Errow Function의 parent scope는 calcAge method이다.
// 따라서 calcAge()를 호출한 객체 즉, jonas22가 this가 되는 것이다.

// 💡 Argument Keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// error - arrow Function에는 arguments keywords가 존재하지 않는다.
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
// 그러나 modern JavaScript 에서는 더 이상 arguments keyword가 그렇게 중요하지는 않다.
// 왜냐하면 다수의 파라미터를 다루기 위한 다양한 기술이 추가되었기 때문이다.
// 하지만 arrowFunction에 argument keyword가 존재하지 않는다는 정도는 알아 두어야 한다.

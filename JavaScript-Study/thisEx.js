"use strict";
// 1. <Method> Object that is calling the method
// 항상 메소드를 호출한 오브젝트를 가리킨다. 
console.log("Method Object & this Test");
const jonas = {
  name: "Jonas",
  year: 1989,
  // function Expression
  calcAge: function () {
    console.log(this);
    console.log(2037 = this.year);
  },
};
jonas.calcAge();

const matilda = {
    year: 2017,
};
// Jonas Object에 존재하는 calcAge 함수를 matilda Object에 복사한다. 
// method borrowing
matilda.calcAge = jonas.calcAge;
matilda.clacAge();

const f = jonas.calcAge;
// cannot read year Element. threfore cause Uncaught TypeError
// f(); 



// 2. <Simple function call> this = undefined
// (Only strict mode. Otherwise: window)
console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // in Strict mode -> undefined
  // otherwise -> window
  console.log(this);
};
calcAge(1991);

// 3. <Arrow Functions> this of surrounding function (lexical this keyword)
console.log("Call Arrow Function");
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
  // window .. This Function Call Parent Function or its parents scope
};
calcAgeArrow(1980);

// 4. <Event Listener> Dom Element that the handler is attached to.

// etc new, call, apply, bind ....

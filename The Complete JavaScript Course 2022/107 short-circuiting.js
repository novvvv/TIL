// Use Any Data Type, return Any data Type,
console.log("---- OR ----");
// OR-short-circuiting → 만약 첫 번째 value 가 truthy value 라면 첫 번째 value를 return한다.
// 첫 번째 value 가 truthy value가 아니라면 두 번째 value를 return한다.
console.log(3 || "Jonas"); // 3
console.log("" || "Jonas"); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

// OR operator chain의 가장 첫 번째 truthy value가 "Hello" 이기에, Hello를 return한다.
console.log(undefined || 0 || "" || "Hello" || 23 || null);

const restaurant = {};
// restaurant Object 내부에 numGuests Property가 존재하지 않기에 restaurant.numGuests는 undefined가 된다.
// 따라서 short-circuiting 규칙에 따라 number 10이 return된다.
// Turnery Operator를 이용해 Object 내부에 property가 존재하는 지 확인.
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
// OR Operator의 short-circuting 특성을 이용해 Object 내부에 property가 존재하는 지 확인.
const guests2 = restaurant.numGuests || 10;
// 💡 하지만 위의 두 솔루션은 프로퍼티 내부의 값이 0이라면 제대로 동작하지 않는다.

// nullish coalescing operator ES2020
// nullish Value -> falsy value 취급
// nullish : null & undefined (Not 0 or '')
// 첫 번째 value가 nullish value면 건너 뛰고 가장 첫 번째로 등장하는 non-nullish-value를 return 한다.
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log("---- AND ----");
// AND-short-circuiting -> 만약 첫 번째 value가 falsy value라면 첫 번째 value를 return 한다.
// 첫 번째 value 가 falsy value가 아니라면 두 번째 value를 return 한다.
console.log(0 && "Jonas"); // 0
console.log(7 && "Jonas"); // "Jonas"
console.log("Hello" && 23 && null && "jonas"); // null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushromms", "spinach");
}

// restaurant.orderPizza Property가 falsy value가 아니라면, 즉, 존재한다면 뒤의 statement를 실행시킨다.
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// 단, 이는 if statement를 사용하지 말고 && || Logical Operator를 사용하라는 의미는 아니다.
// 오히려 Logical Operator를 사용해 위와 같은 코드를 작성하는 경우 코드를 읽는 데 매우 불편할 수 있다.

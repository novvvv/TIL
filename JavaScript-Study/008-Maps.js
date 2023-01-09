// 0. Declaration
const rest = new Map();

// 1. Add Elements
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, portugal");

// set Chaining
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

// 2. Access Elements
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1)); // undefined

// 3. Check & Delete
console.log(rest.has("categories"));
rest.delete(2);
console.log(rest.has(2));

// 4. Size & Clear
console.log(rest.size);
// rest.clear();

// Example
const time = 21;
// 11(open) <= current time <= 23(close), print rest.set(true) -> We are open :D
rest.get(time > rest.get("open") && time < rest.get("close"));

// Object를 Key로 사용하는 예제
// heap에 존재하는 같은 object가 아니기에, Array를 통한 접근은 불가능하다.
rest.set([1, 2], "Test");
rest.get([1, 2]);

// 같은 메모리에 존재하기 때문에 접근이 가능하다.
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr));

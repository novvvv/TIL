// 2022-11-26 JavaScript-Study
// Primitive Data Types & Heap Memory Data Types Deffrence & Structure.
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Jonas",
  age: 30,
};
const friend = me;
friend.age = 27;
console.log("Friend:", friend);
console.log("Me", me);

// Primitive Data Types - Number String Boolean Undefined Null Symbol BigInt
// -> Stored in Call Stack (execution contexts)
// Object Reffrence Data Types - Object literal, Arrays, functions, ... and so on
// -> Stored in Heap

// Call Stack Stored Structure
// let age = 30;
// Indentifier : age
// Address : x0001
// Value : 30
// Indentifier(age)는 Value가 아닌 Address를 가리킴

// let oldAge = 30;
// Identifier : oldAge
// Address : x001
// Value : 30
// Indentifier(oldAge)는 age와 같은 Address를 가리킨다.

// age = 31;
// 새로운 Address를 할당하여 그 Address를 가리킨다.

// Heap Memory Structure
// const me = { name: 'Jonas', age: 30 };
// Object Data Type 은 Primitive Data Type 과 달리 Call Stack에 식별자를 두고,
// Heap 공간에 저장된 객체를 가리킴.
// 왜냐하면 CALL STACK에 그대로 실체를 두기에는 용량이 너무 크기 때문.
// 즉, me(identifier) -> Call Stack, 실체(Object) -> Heap
// const friend = me;
// friend.age = 27;
// friend와 me가 가리키는 메모리 주소가 일치하여 실제 데이터에도 영향을 미친다.

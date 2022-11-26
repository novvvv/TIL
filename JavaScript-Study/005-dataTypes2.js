let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

// callStack에 존재하는 marriedJessica를 바꾸는 것이 아닌,
// 새로운 변수가 Heap에 존재하는 객체의 주소를 가리키게 하는 것이니 const던 let이던 상관없음.

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log(`Before marriage : `, jessica);
console.log(`After marriage : `, marriedJessica);

// marriedJessica = {}
// 가리키고 있는 참조 주소 자체를 변경하는 것은 불가능 하다.
// -> let으로 선언했다면 가능하다.

// 💡 Copying objects
// Object.assign() - 원본 객체의 상태를 유지하면서 복사한 객체의 상태를 변경한다.
// Shallow Copy
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

// behind Scene - jessicaCopy 식별자가 가리키는 새로운 주소의 객체가 생성됨.
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log(`Before marriage : `, jessica2);
console.log(`After marriage : `, jessicaCopy);

// 하지만 Object.assign()은 완벽하지는 않다.
// Object 안에 Object가 정의되어 있다면, 그 안의 Object Type을 Deep Copy 하지는 못함.


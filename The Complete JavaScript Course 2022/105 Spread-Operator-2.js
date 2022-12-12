// JavaScript-Spread-Operator-Study
// Day. 2022-12-11
// 💡 spread Operator With Array Literal
// 1. spread Array
const playerId = ["nov", "Isis", "Aria"];
console.log(playerId); // Array 형태를 유지한다.
console.log(...playerId); // Array에 저장된 원소 그 자체를 출력한다.
console.log(playerId[0], playerId[1], playerId[2]); // same
// Spread-Syntax 문법을 이용하면 Iterable Object playerId 객체가 인수들의 목록으로 확장된다.

// 그래서 이게 왜 필요한데?
// -> 배열을 통째로 파라미터로 넘겨줘야 하는 상황에서 유용하게 사용됨.
const playerLevel = [50, 20, 100, 40];
console.log(Math.max(...playerLevel));
// console.log(Math.max(playerLevel));
// Math.max method는 배열이 아닌 숫자 목록을 인수로 받기에 NaN을 출력한다.
// 하나 하나 인덱싱하는 방법도 있긴 하지만 코드도 지저분해 지고, 배열의 길이가 불명확한 상황에선
// 사용할 수 없음.

// 2. concat Array - 배열 이어 붙이기.
const newId = [...playerId, "user1", "user2", "user3"];
console.log(newId);

// spread Operator를 사용하지 않는다면?
const newId2 = [playerId, "user1", "user2", "user3"];
console.log(newId2);
// nested Array 구조로 생성되어 원하는 형태의 배열이 아님.
// 물론 concat, apply, push 등의 method를 이용해 배열을 합칠 수는 있지만 깔끔하지 않음.

// 3. copy Array - 배열 복사하기.
const monsterId = ["slime", "oak", "snail"];
const newMonsterId = [...monsterId];
console.log(newMonsterId);
newMonsterId[0] = "redSlime";
console.log(monsterId);
console.log(newMonsterId);
// Object.assign()과 동일한 방법으로 객체를 복사하기에 원래 데이터에 영향을 미치지 않음.
console.log(monsterId === newMonsterId);
const monsterId2 = ["slime", "oak", "snail", [1, 2, 3]];
const newMonsterId2 = [...monsterId2];
newMonsterId2[3][0] = 0;
console.log(monsterId2);
// but Object.assign()은 중첩된 객체까지 완벽하게 복사하진 못하기에 중첩된 객체의 원소를 변경하면,
// 원래 원소의 값 또한 변경된다.

// 💡 spread Operator With Iterable Object [String]
// spread Syntax는 for..of와 동일한 방식으로 요소를 수집하며, 반드시 배열이 아니더라도,
// Iterable Object라면 Spread Syntax를 사용할 수 있다.
const id = "nov";
console.log([...id]); // 문자열에 for .. of를 사용하면 문자열을 구성하는 문자가 반환된다.
// "nov"는 n, o, v가 되며 이 문자들은 배열 초기자(array initializer) [...id] 로 전달된다.
console.log(Array.from(id)); // Iterable Object를 Array로 변환해 준다.

// Array.from(obj) vs [...obj]
// Array.from(obj)는 "유사 배열 객체", "이터러블 객체" 모두 사용 가능하다.
// [...obj]는 "이터러블 객체" 에만 사용할 수 있다.
// 따라서 무언가를 배열로 바꾸는 문법은 Spread-Syntax 문법 보다는 Array.from 문법이 자주 사용된다.

// spread Operator With Object
const warrior = {
  ...playerId,
  playerId: "nov",
  level: 100,
};
console.log({ ...warrior });

// 더 공부할 내용
// 1. 유사 배열 객체
// 2. 이터러블 객체
// 3. for .. of Syntax

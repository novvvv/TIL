const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// OR assignment operator
// rest1 Object 안에 numGuests Property가 존재하면 즉, rest1.numGuests가 falsy value 라면 그대로 두고,
// numGusets Property가 존재하지 않는다면 즉, rest1.numGuests가 numGuests property 생성 후 10을 대입한다.
// rest1.numGuests = rest1.numGuests || 10;
rest1.numGuests ||= 10;
// rest2.numGusets = rest2.numGuests statement가 falsy value이기에 10이 return된다.
// rest2.numGusets = rest2.numGuests || 10;
rest2.numGuests ||= 10;

const rest3 = {
  name: "rest3",
  numGuests: 0,
};
rest3.numGuests ||= 10;
// 그러나 Property의 값이 0이라면 문제가 발생한다.
// 0은 falsy value이기에 0으로 초기화 되어 있음에도 불구하고, 10이 대입 되어 버리게 된다.

// nullish assignment operator (null or undefined)
rest3.numGuests ??= 10;

// AND assignment operator
// 첫 번째 value가 falsy value 이기에 rest1.owner = (undefined) 를 return한다.,
// rest1.owner = rest1.owner && "<ANONYMOUS>";
rest1.owner &&= "<ANONYMOUS>";
rest2.owner = rest2.owner && "<ANONYMOUS>";

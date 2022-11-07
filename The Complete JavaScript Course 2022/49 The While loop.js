// while loop
let rep = 1;
while (rep <= 10) {
	console.log(`Lifting weight repetition ${rep}🦾`);
	rep++;
}

// roll a dice
// Math.trunc - 소수점 제거 & 정수 부분만 리턴한다.
// Math.random - 0 ~ 1(미포함) 사이의 수를 리턴한다.
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while(dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) console.log(`Loop is about to end.`);
}

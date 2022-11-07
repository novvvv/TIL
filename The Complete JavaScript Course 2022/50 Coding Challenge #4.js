const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

const calcTip = function(bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for(let i = 0; i < bills.length ; i++){
	tips.push(calcTip(bills[i]));
	totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);

const calcAverage = function(arr){
	let sum = 0;
	let iter = 0;
	while(iter !== arr.length){
		sum += arr[iter];
		iter++;
	}
	return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

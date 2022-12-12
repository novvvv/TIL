const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterManu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructing Assignment 문법을 활용해 객체의 프로퍼티를 순서에 상관 없이 함수의 파라미터로 보낸다.
  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = "20:00",
    time,
    address,
  }) {
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

// 105. The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
// 단 Spread Operator는 반드시 콤마(,)와 함께 사용해야만 하며, 단독으로 사용될 수 는 없다.

// expand Array
// const newArr = [1, 2, arr];
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9); // same

// restaurant object mainMenu property의 원소들에 직접 접근할 필요 없이, ... Spread Operator를 이용하면
// 배열을 쉽게 구조화 할 수 있다.
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array
// Shallow Copy like Object.assgin()
const mainMenuCopy = [...restaurant.mainMenu];

// Spread Operator & Iterable Value
// Iterable: arrays, strings, maps, sets. NOT objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log();
console.log(...str);

const ingredients = [
  prompt("Let's maek pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); // ES6 Syntax same
// ES2018 까지는 ...Operator는 Object에서만 동작했다.

// Objects
const newRestaurant = { ...restaurant, founder: "Guiseppe" };

// shallow copy object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (firstMeal, secondMeal) {
    return [this.starterMenu[firstMeal], this.starterMenu[secondMeal]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is delicous pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
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
};

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 222;
// let b = 555;
// const obj = { a: 2, b: 1, c: 5 };
// ({ a, b } = obj);
// console.log(a, b);

// //Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// let [first, , second] = restaurant.categories;
// [first, second] = [second, first];
// console.log(first, second);

// const [firstMeal, secondMeal] = restaurant.order(2, 0);
// console.log(firstMeal, secondMeal);

// const nested = [2, 4, [5, 6]];
// const [q, , [e, r]] = nested;
// console.log(q, e, r);

// const newMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(newMenu);

const ingredients = [
  prompt("Let's make pasta! Igredient 1?"),
  prompt('Igredient 2?'),
  prompt('Igredient 3?'),
];
// console.log(ingredients);

restaurant.orderPasta(...ingredients);

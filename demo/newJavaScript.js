const array = ["A", "B", "C", "D", ["E", "F"]];

//todo destructure array?
const someThing = ["first", "second", , "fourth", ["fifth", "sixth"], "eighth"];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 39,
  favoriteFood: "Rice",
  address: {
    street: "123 Main St",
    city: "Somewhere",
    zipcode: "42069",
  },
};

const {
  firstName,
  age,
  address: { street, city, zipcode },
} = person;

console.log(firstName, age, street, city, zipcode);

function sum(multi, ...args) {
  return multi * args.reduce((sum, number) => sum + number, 0);
}

const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(sum(10, 2, 3, 4));
console.log(sum(30, ...someArray));

[...someArray].map((num) => {
  console.log(num);
});

function addAndMultiply(a, b) {
  // return [a + b, a * b];
  return { sum: a + b, product: a * b };
}

const result = addAndMultiply(2, 3);

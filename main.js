const array = ["Mango", "Poly", "Kiwi", "Ajax"];

let string = "";

for (let i = 0; i < array.length; i++) {
  string += array[i];
  if (i < array.length - 1) {
    string += ",";
  }
}

console.log(string);

const array2 = ["Mango", "Poly", "Kiwi", "Ajax"];

console.log(array2.join(","));

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

const lastIndex = cards.length - 1;

cards.splice(2, 1);

cards.splice(lastIndex, 0, "Карточка-6");

cards.splice(2, 1, "Карточка-891237812873");

console.log(cards);

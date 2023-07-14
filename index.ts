import maskify from "./src/exe1";
import updateData from "./src/exe2";
import getRickAndMortyCharacters from "./src/exe3";
import checkIfTheFirstLetterIsUppercase from "./src/exe4";

// exercicio 1
const maskedWord: string = maskify("Nanananananananananana Batman!");
console.log(maskedWord);

// exercicio 2
const objectUpdateAt = updateData(
  { name: "Rafael", country: "Chile", age: 42 },
  { name: "Camiseta Polo", price: 59.9, amount: 30 }
);
console.log(objectUpdateAt);

// exercicio 3
(async () => {
  const data = await getRickAndMortyCharacters();
  console.log(data);
})();

// exercicio 4
const firstLetterIsUppercase: boolean = checkIfTheFirstLetterIsUppercase("Brasil");
console.log(firstLetterIsUppercase);

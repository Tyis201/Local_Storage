

const animals = ["dog", "cat", "fish", "horse", "cat"];

const animalsArray = JSON.stringify(animals);

console.log(animalsArray);

localStorage.setItem("animalStored", animalsArray);

let unstoredAnimals = localStorage.getItem("animalStored");

let newAnimal = JSON.parse(unstoredAnimals);

document.write(newAnimal)
const { faker } = require('@faker-js/faker');
const Person = require('./Person');

// Générer une liste de personnes avec des noms aléatoires
const people = [];
for (let i = 0; i < 20; i++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const person = new Person(firstName, lastName);
  people.push(person);
}

// Générer des groupes équilibrés en fonction du nombre de groupes spécifié
const numGroups = 3; // Nombre de groupes souhaité
const groups = generateGroups(people, numGroups);

// Fonction pour générer des groupes équilibrés
function generateGroups(people, numGroups) {
  const shuffledPeople = [...people];
  shuffledPeople.sort(() => Math.random() - 0.5);

  const groups = [];
  const groupSize = Math.floor(people.length / numGroups);

  for (let i = 0; i < numGroups; i++) {
    const group = shuffledPeople.splice(0, groupSize);
    groups.push(group);
  }

  let remainingIndex = 0;
  while (shuffledPeople.length > 0) {
    groups[remainingIndex].push(shuffledPeople.shift());
    remainingIndex = (remainingIndex + 1) % numGroups;
  }

  return groups;
}

// Afficher les groupes de personnes dans la console
groups.forEach((group, index) => {
  console.log(`Groupe ${index + 1}:`);
  group.forEach((person, personIndex) => {
    console.log(`Personne ${personIndex + 1}: ${person.getFullName()}`);
  });
  console.log();
});

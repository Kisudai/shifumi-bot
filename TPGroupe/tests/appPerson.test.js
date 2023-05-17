const { faker } = require('@faker-js/faker');
const Person = require('../Person');

// Test de la fonction generateGroups()
test('generateGroups() génère des groupes équilibrés', () => {
  // Fonction pour générer des groupes équilibrés
  function generateGroups(people, numGroups) {
    const totalPeople = people.length;
    const groupSize = Math.floor(totalPeople / numGroups);
    const remainder = totalPeople % numGroups;

    if (remainder !== 0) {
      throw new Error(
        'Le nombre de groupes spécifié ne permet pas d\'avoir des groupes de même effectif.'
      );
    }

    const groups = [];
    let startIndex = 0;

    for (let i = 0; i < numGroups; i++) {
      const group = [];
      for (let j = 0; j < groupSize; j++) {
        group.push(people[startIndex]);
        startIndex++;
      }
      groups.push(group);
    }

    return groups;
  }

  const people = [];

  // Générer une liste de personnes avec des noms aléatoires
  for (let i = 0; i < 20; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const person = new Person(firstName, lastName);
    people.push(person);
  }

  const numGroups = 3;

  // Vérification du nombre de groupes générés
  expect(() => {
    generateGroups(people, numGroups);
  }).toThrowError(
    'Le nombre de groupes spécifié ne permet pas d\'avoir des groupes de même effectif.'
  );

  // Vérification de la répartition équitable des personnes
  let groups;
  try {
    groups = generateGroups(people, numGroups);
  } catch (error) {
    expect(error.message).toBe(
      'Le nombre de groupes spécifié ne permet pas d\'avoir des groupes de même effectif.'
    );
  }

  if (groups) {
    const groupSize = Math.floor(people.length / numGroups);
    groups.forEach((group) => {
      expect(group.length).toBe(groupSize);
    });
  }
});

// Test de la classe Person
describe('Person', () => {
  test('crée une nouvelle personne avec prénom et nom', () => {
    const person = new Person('John', 'Doe');
    expect(person.firstName).toBe('John');
    expect(person.lastName).toBe('Doe');
  });

  test('obtient le nom complet de la personne', () => {
    const person = new Person('John', 'Doe');
    expect(person.getFullName()).toBe('Prénom: John - Nom: Doe');
  });
});

const Person = require('../Person');

// Test de la méthode getFullName()
test('getFullName() retourne le nom complet de la personne', () => {
  const person = new Person('John', 'Doe');
  expect(person.getFullName()).toBe('Prénom: John - Nom: Doe');
});

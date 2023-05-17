class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName() {
      return `Prénom: ${this.firstName} - Nom: ${this.lastName}`;
    }
  }
  
  module.exports = Person;
  
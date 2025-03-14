function createPerson (firstName, lastName, age){
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}

console.log(createPerson('Angel', 'Uzunov', 25))
function createPerson (firstName, lastName, age){
    let person = {
        firstName,
        lastName,
        age
    };
    
    return person;
}

console.log(createPerson('Angel', 'Uzunov', 25))
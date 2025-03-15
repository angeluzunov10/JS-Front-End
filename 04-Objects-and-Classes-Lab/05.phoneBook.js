function phoneBookMaker(contactsArr){
    let phonebook = {};

    for (let contact of contactsArr){
        let [name, phoneNumber] = contact.split(' ');

        phonebook[name] = phoneNumber;
    }

    for (let name in phonebook){
        console.log(`${name} -> ${phonebook[name]}`)
    }
}
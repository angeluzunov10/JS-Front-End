function addressBookMaker(data){
    let addressBook = {};

    for (let person of data){
        let [name, address] = person.split(':');

        addressBook[name] = address;
    }

    let addressBookEntries = Object.entries(addressBook);

    addressBookEntries.sort(compareEntries);

    function compareEntries(a, b){
        return a[0].localeCompare(b[0]);
    }

    for (let [name, address] of addressBookEntries){
        console.log(`${name} -> ${addressBook[name]}`);
    }
}

addressBookMaker(['Tim:Doe Crossing',

    'Bill:Nelson Place',
    
    'Peter:Carlyle Ave',
    
    'Bill:Ornery Rd'])
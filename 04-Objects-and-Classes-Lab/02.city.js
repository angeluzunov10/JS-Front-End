function printKeysAndValues(cityObject) {
    let cityInfo = Object.entries(cityObject);

    for (let [key, value] of cityInfo){
        console.log(`${key} -> ${value}`);
    }
}

printKeysAndValues({name: 'Sofia', area: 492, population: 1238438, country: 'Bulgaria', postCode: 1000})


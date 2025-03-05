function printNames(arr) {
    arr = arr.sort((a, b) =>a.localeCompare(b));
    let counter = 1;

    for (let name of arr) {
        console.log (`${counter}.${name}`) 
        counter += 1;
    }
} 
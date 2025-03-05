function rotation(arr, rotationsCount) {
    for (let i = 0; i < rotationsCount; i++) {
        let element = arr.shift();
        arr.push(element);
    }
    

    console.log(arr.join(' '));
}
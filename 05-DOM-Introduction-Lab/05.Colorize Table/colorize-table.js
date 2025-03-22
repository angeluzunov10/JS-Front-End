function colorize() {
    //TODO

    let evenRows = document.querySelectorAll('tbody tr:nth-child(even)');

    for (let row of evenRows){
        row.style.backgroundColor = 'Teal';
    }

    console.log(evenRows)
}
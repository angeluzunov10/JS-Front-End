// function matrix(number){
//     console.log((Array(number).fill().map(() => (Array(number).fill(number).join(' ')))).join('\n'));
// }


function matrix(number){
    let numToString = number.toString();
    let rowString = (numToString + ' ').repeat(number).trim();

    for (let i = 0; i < number; i++){
        console.log(rowString);
    }
}
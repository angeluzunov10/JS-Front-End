function solve(word, textAsString) {
    word = word.toLocaleLowerCase();

    textAsString = textAsString.toLocaleLowerCase();

    let textArr = textAsString.split(' ')

    if (textArr.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    } 
}

solve ('python', 'JavaScript is the best programming language')
solve ('javascript', 'JavaScript is the best programming language')
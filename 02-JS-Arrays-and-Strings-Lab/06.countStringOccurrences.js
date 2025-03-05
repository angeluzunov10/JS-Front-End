function counter(text, match) {
    let count = 0;

    text = ` ${text} `
    match = ` ${match} `

    let startIndex = 0;

    while (true) {
        let index = text.indexOf(match, startIndex);

        if (index == -1) {
            break;
        }

        count += 1;
        startIndex = index + match.length - 1;

    } 

    console.log(count)

}


function countOccurrences(text, match) {
    let count = 0;
    let textList = text.split(' ');

    for (let word of textList) {
        if (word == match) {
            count += 1
        }
    }

    console.log(count)
 
}
// function censore(text, word) {
//     let result = text.replaceAll(word, '*'.repeat(word.length))

//     console.log(result)
// }


function censore(text, word) {

    while (text.includes(word)){
        text = text.replace(word, '*'.repeat(word.length))
    }

    console.log(text)
}

censore ('A small sentence with some small words', 'small')
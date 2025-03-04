function findSubstring(string, startIndex, count) {
    let newString = string.substring(startIndex, startIndex + count)

    console.log(newString)
}


findSubstring('ASentence', 1, 8)
findSubstring('SkipWord', 4, 7)
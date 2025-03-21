function solve(words){
    let searchedWords = words.shift().split(' ');
    let occurrences  = {};

    for (let word of searchedWords) {
        occurrences[word] = 0;
    }

    for (let each of words) {
        if (occurrences.hasOwnProperty(each)){
            occurrences[each] += 1;
        } 
    }
    
    let sortedOccurrences = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);
    sortedOccurrences.forEach(([word, count]) => console.log(`${word} - ${count}`));
}

solve(
    [

        'this sentence',
        
        'In', 'this', 'sentence', 'you', 'have',
        
        'to', 'count', 'the', 'occurrences', 'of',
        
        'the', 'words', 'this', 'and', 'sentence',
        
        'because', 'this', 'is', 'your', 'task'
        
        ]
)
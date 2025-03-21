function solve(sentence) {
    let words = sentence.toLowerCase().split(' '); 
    let occurences = {};
    let result = [];

    for (let word of words) {
        if (occurences.hasOwnProperty(word)){
            occurences[word] += 1;
        } else {
            occurences[word] = 1;
        }
    } 

    let oddOccurrences = Object.entries(occurences);

    for (let occurence of oddOccurrences){
        let word = occurence[0];
        let count = occurence[1];

        if (count % 2 != 0){
            result.push(word);
        }
    }
    
    console.log(result.join(' '))

}

solve('Cake IS SWEET is Soft CAKE sweet Food');
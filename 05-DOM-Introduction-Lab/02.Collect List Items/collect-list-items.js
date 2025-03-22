function extractText() {
    // TODO
    let items = document.getElementById('items').children;
    let result = [];
    
    
    for (let li of items) {
        let content = li.textContent;
        result.push(content);
    }

    let output = document.getElementById('result');
    output.value = result.join('\n');
}
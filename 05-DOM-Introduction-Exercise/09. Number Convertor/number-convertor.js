function solve() {
    // TODO

    let number = Number(document.getElementById('input').value);

    let convertTo = document.getElementById('selectMenuTo').value;

    let result = '';

    if (convertTo == 'binary'){
        result = number.toString(2);
    } else if (convertTo == 'hexadecimal'){
        result = number.toString(16).toUpperCase();
    }

    let output = document.getElementById('result');
    output.value = result;
    
}
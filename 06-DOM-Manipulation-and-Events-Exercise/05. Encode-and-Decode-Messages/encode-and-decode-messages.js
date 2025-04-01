document.addEventListener('DOMContentLoaded', solve);

function solve() {
    //TODO

    let encodeBtn = document.querySelector('form[id="encode"] button');
    let decodeBtn = document.querySelector('form[id="decode"] button');

    encodeBtn.addEventListener('click', encodeMessage);
    decodeBtn.addEventListener('click', decodeMessage);

    function encodeMessage(ev){
        ev.preventDefault();
        let textToEncode = document.querySelector('form[id="encode"] textarea').value;
        let encodedText = '';
        for (let i = 0; i < textToEncode.length; i++){
            let charCode = textToEncode[i].charCodeAt(0) + 1;
            encodedText += String.fromCharCode(charCode);
        }

        document.querySelector('form[id="encode"] textarea').value = '';
        document.querySelector('form[id="decode"] textarea').value = encodedText;
    }

    function decodeMessage(ev){
        ev.preventDefault();

        let textToDecode = document.querySelector('form[id="decode"] textarea').value;
        let decodedText = '';
        for (let i = 0; i < textToDecode.length; i++){
            let charCode = textToDecode[i].charCodeAt(0) - 1;
            decodedText += String.fromCharCode(charCode);
        }

        document.querySelector('form[id="decode"] textarea').value = decodedText;
        
    }
}
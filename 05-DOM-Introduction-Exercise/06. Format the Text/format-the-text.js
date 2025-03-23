function solve() {
  // TODO

  let text = document.getElementById('input').value;
  let sentences = text.split('.').filter(s => s.trim() != '');
  let output =  document.getElementById('output');

  let result = [];
  
  for (let i = 0; i < sentences.length; i += 3){
    let paragraphSentences = sentences.slice(i, i + 3).map(s => s.trim() + '.').join(' ');
    let paragraph = `<p>${paragraphSentences}</p>`;
    result.push(paragraph);
  }

  output.innerHTML = result.join('\n'); 
}
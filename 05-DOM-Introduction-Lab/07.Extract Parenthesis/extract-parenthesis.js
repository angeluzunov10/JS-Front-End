function extract(content) {
    // TODO

    let text = document.getElementById(content).textContent.trim();

    let matches = text.match(/\((.+?.)\)/g);

    matches = matches.join('; ');

    return matches.toString();
}
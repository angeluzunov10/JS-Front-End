function deleteByEmail() {
    //TODO

    let input = document.querySelector('[name="email"]');

    let pattern = input.value;

    if (!pattern){
        return;
    }

    let rows = Array.from(document.querySelectorAll('tbody tr'));

    let deleted = false;

    for (let row of rows){
        let emailCol = row.children[1];
        let email = emailCol.textContent;

        if (email == pattern){
            row.remove();
            deleted = true;
        }
    }

    let output = document.getElementById('result');

    if (deleted){
        input.value = '';
        output.textContent = 'Deleted.';
    } else {
        output.textContent = 'Not found.'
    }
}

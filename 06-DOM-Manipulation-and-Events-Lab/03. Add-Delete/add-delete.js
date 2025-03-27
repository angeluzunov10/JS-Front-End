function addItem() {
    //TODO

    let input = document.getElementById('newItemText');
    let text = input.value;

    if (!text) {
        return;
    }

    let newLi = document.createElement('li');
    newLi.textContent = text;

    let deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    deleteBtn.addEventListener('click', onDelete);

    newLi.appendChild(deleteBtn);


    let list = document.getElementById('items');
    list.appendChild(newLi);

    input.value = '';


    function onDelete(e){
        let item = e.target.parentElement;
        item.remove();
    }

}
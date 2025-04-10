let host = 'http://localhost:3030/jsonstore/orders/';

let orderBtn = document.getElementById('order-btn');
let editBtn = document.getElementById('edit-order');

// Attach event listeners
document.getElementById('load-orders').addEventListener('click', showOrders);
orderBtn.addEventListener('click', onAdd);
editBtn.addEventListener('click', onEdit);

// Function to create a list item for each order
async function showOrders() {
    let data = await getAllOrders();

    let list = document.getElementById('list');
    list.replaceChildren();

    for (let record of data) {
        let changeBtn = create('button', ['Change']);
        changeBtn.className = 'change-btn';
        changeBtn.addEventListener('click', () => onRecordEdit(record, element));

        let deleteBtn = create('button', ['Done']);
        deleteBtn.className = 'done-btn';
        deleteBtn.addEventListener('click', async () => {
            await deleteOrder(record._id);
            showOrders();
        });

        let controlDiv = create('div', [changeBtn, deleteBtn], 'buttons-container');

        let element = create('div', [
            create('h2', [record.name]),
            create('h3', [record.date]),
            create('h3', [record.quantity]),
            controlDiv
        ]);
        
        element.className = 'container';
        list.appendChild(element);
    }
}

// Function for editing an order
function onRecordEdit(record, element) {
    element.remove();

    document.getElementById('name').value = record.name;
    document.getElementById('quantity').value = record.quantity;
    document.getElementById('date').value = record.date;

    editBtn.dataset.id = record._id;
    orderBtn.disabled = true;
    editBtn.disabled = false;
}

// Function for adding a new order
async function onAdd() {
    let nameInput = document.getElementById('name');
    let quantityInput = document.getElementById('quantity');
    let dateInput = document.getElementById('date');

    if (!nameInput.value || !quantityInput.value || !dateInput.value) {
        return;
    }

    await addOrder(nameInput.value, quantityInput.value, dateInput.value);

    nameInput.value = '';
    quantityInput.value = '';
    dateInput.value = '';

    showOrders();
}

// Function for editing an existing order
async function onEdit() {
    let nameInput = document.getElementById('name');
    let quantityInput = document.getElementById('quantity');
    let dateInput = document.getElementById('date');
    let id = editBtn.dataset.id;

    if (!nameInput.value || !quantityInput.value || !dateInput.value) {
        return;
    }

    await updateOrder(id, nameInput.value, quantityInput.value, dateInput.value);

    nameInput.value = '';
    quantityInput.value = '';
    dateInput.value = '';

    orderBtn.disabled = false;
    editBtn.disabled = true;
    editBtn.dataset.id = '';

    showOrders();
}

// Function to fetch all orders from the server
async function getAllOrders() {
    let res = await fetch(host);
    if (res.status == 204) {
        return [];
    }

    let data = await res.json();
    return Object.values(data);
}

// Function to add a new order to the server
async function addOrder(name, quantity, date) {
    let record = { name, quantity, date };

    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
    };

    await fetch(host, options);
}

// Function to delete an order from the server
async function deleteOrder(id) {
    let options = {
        method: 'DELETE',
    };

    await fetch(`${host}${id}`, options);
}

// Function to update an order on the server
async function updateOrder(_id, name, quantity, date) {
    let record = { _id, name, quantity, date };

    let options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
    };

    await fetch(`${host}${_id}`, options);
}

// Utility function to create an element
function create(tagName, content, id) {
    let element = document.createElement(tagName);

    if (id) {
        element.id = id;
    }

    for (let child of content) {
        if (typeof child === 'object') {
            element.appendChild(child);
        } else {
            let node = document.createTextNode(child);
            element.appendChild(node);
        }
    }

    return element;
}

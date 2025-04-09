// Select elements from the DOM
const orderBtn = document.getElementById('order-btn');
const editBtn = document.getElementById('edit-order');
const loadBtn = document.getElementById('load-orders');
const nameInput = document.getElementById('name');
const quantityInput = document.getElementById('quantity');
const dateInput = document.getElementById('date');
const listContainer = document.getElementById('list');

// Global variable to track the current order ID for editing
let currentOrderId = null;

// Helper function to create HTML structure for an order
function createOrderElement(order) {
    const container = document.createElement('div');
    container.classList.add('container');
    
    const name = document.createElement('h2');
    name.textContent = order.name;
    
    const date = document.createElement('h3');
    date.textContent = order.date;
    
    const quantity = document.createElement('h3');
    quantity.textContent = order.quantity;

    const changeBtn = document.createElement('button');
    changeBtn.textContent = 'Change';
    changeBtn.classList.add('change-btn');
    changeBtn.addEventListener('click', () => loadOrderForEdit(order));

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.classList.add('done-btn');
    doneBtn.addEventListener('click', () => deleteOrder(order._id));

    container.appendChild(name);
    container.appendChild(date);
    container.appendChild(quantity);
    container.appendChild(changeBtn);
    container.appendChild(doneBtn);

    return container;
}

// Load orders from the server
async function loadOrders() {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/orders/');
        const data = await response.json();
        
        // Clear the existing list
        listContainer.innerHTML = '';
        
        // Create an HTML element for each order
        Object.values(data).forEach(order => {
            const orderElement = createOrderElement(order);
            listContainer.appendChild(orderElement);
        });

        // Disable the Edit button if there's no selected order
        editBtn.disabled = true;
    } catch (error) {
        console.error('Error loading orders:', error);
    }
}

// Create a new order and send it to the server
async function createOrder() {
    const name = nameInput.value.trim();
    const quantity = quantityInput.value.trim();
    const date = dateInput.value.trim();

    if (name && quantity && date) {
        const newOrder = { name, quantity, date };
        
        try {
            // Send the POST request to create a new order
            await fetch('http://localhost:3030/jsonstore/orders/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newOrder)
            });

            // Clear input fields
            nameInput.value = '';
            quantityInput.value = '';
            dateInput.value = '';

            // Reload all orders
            loadOrders();
        } catch (error) {
            console.error('Error creating order:', error);
        }
    }
}

// Load an order's details into the form for editing
function loadOrderForEdit(order) {
    currentOrderId = order._id;
    nameInput.value = order.name;
    quantityInput.value = order.quantity;
    dateInput.value = order.date;

    // Enable the Edit button and disable the Create Order button
    orderBtn.disabled = true;
    editBtn.disabled = false;
}

// Edit an existing order
async function editOrder() {
    const name = nameInput.value.trim();
    const quantity = quantityInput.value.trim();
    const date = dateInput.value.trim();

    if (name && quantity && date && currentOrderId) {
        const updatedOrder = { name, quantity, date };

        try {
            // Send the PUT request to update the order
            await fetch(`http://localhost:3030/jsonstore/orders/${currentOrderId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedOrder)
            });

            // Clear input fields and reset buttons
            nameInput.value = '';
            quantityInput.value = '';
            dateInput.value = '';
            orderBtn.disabled = false;
            editBtn.disabled = true;

            // Reload all orders
            loadOrders();
        } catch (error) {
            console.error('Error editing order:', error);
        }
    }
}

// Delete an order from the server
async function deleteOrder(orderId) {
    try {
        // Send the DELETE request to remove the order
        await fetch(`http://localhost:3030/jsonstore/orders/${orderId}`, {
            method: 'DELETE',
        });

        // Reload all orders after deletion
        loadOrders();
    } catch (error) {
        console.error('Error deleting order:', error);
    }
}

// Event listeners for buttons
orderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    createOrder();
});

editBtn.addEventListener('click', (e) => {
    e.preventDefault();
    editOrder();
});

loadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loadOrders();
});

// Initially load orders when the page is ready
window.addEventListener('load', loadOrders);
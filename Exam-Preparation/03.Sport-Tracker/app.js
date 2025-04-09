let host = 'http://localhost:3030/jsonstore/workout';


let addBtn = document.getElementById('add-workout');
let editBtn = document.getElementById('edit-workout');

// Step 4: Attach the eventListeners

document.getElementById('load-workout').addEventListener('click', showWorkouts);
addBtn.addEventListener('click', onAdd);
editBtn.addEventListener('click', onEdit);

// Step 3: The DOM code 

async function showWorkouts() {
    let data = await getAllWorkouts();

    let list = document.getElementById('list');

    list.replaceChildren();

    for (let record of data) {
        let changeBtn = create('button', ['Change']);
        changeBtn.addEventListener('click', () => onRecordEdit(record, element));
        changeBtn.className = 'change-btn';

        let deleteBtn = create('button', ['Done']);
        deleteBtn.addEventListener('click', async () => {
            await deleteWorkout(record._id);
            showWorkouts();
        })
        deleteBtn.className = 'delete-btn';

        let controlDiv = create('div', [
            changeBtn,
            deleteBtn
        ], 'buttons-container')

        let element = create('div', [
            create('h2', [record.workout]),
            create('h3', [record.date]),
            create('h3', [record.location], 'location'),
            controlDiv
        ]);
        
        element.className = 'container';

        list.appendChild(element);
    }
}

function onRecordEdit(record, element){
    element.remove();

    document.getElementById('workout').value = record.workout;
    document.getElementById('location').value = record.location;
    document.getElementById('date').value = record.date;

    editBtn.dataset.id = record._id;        // this shows the record whose edit button was clicked and we will use it on the click function

    addBtn.disabled = true;
    editBtn.disabled = false;

}

async function onAdd() {
    let workoutInput = document.getElementById('workout');
    let locationInput = document.getElementById('location');
    let dateInput = document.getElementById('date');

    if (!workoutInput.value || !locationInput.value || !dateInput.value){
        return;
    }

    await addWorkout(workoutInput.value, locationInput.value, dateInput.value);

    workoutInput.value = '';
    locationInput.value = '';
    dateInput.value = '';

    showWorkouts() // to show the workouts including the new one

}

async function onEdit() {
    let workoutInput = document.getElementById('workout');
    let locationInput = document.getElementById('location');
    let dateInput = document.getElementById('date');
    let id = editBtn.dataset.id;

    if (!workoutInput.value || !locationInput.value || !dateInput.value){
        return;
    }

    await updateWorkout(id, workoutInput.value, locationInput.value, dateInput.value);

    workoutInput.value = '';
    locationInput.value = '';
    dateInput.value = '';

    addBtn.disabled = false;
    editBtn.disabled = true;
    editBtn.dataset.id = '';

    showWorkouts() // to show the workouts including the changes
}



// Step 1: Async functions for the data

async function getAllWorkouts() {
    let res = await fetch(host);

    if (res.status == 204) {
        return [];
    }

    let data = await res.json();

    return Object.values(data);
}

async function addWorkout(workout, location, date) {
    let record = {
        workout,
        location,
        date
    };

    let options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
    };

    await fetch(host, options);
}

async function deleteWorkout(id) {
    let options = {
        method: 'delete'
    };

    await fetch(`${host}/${id}`, options);
}

async function updateWorkout(_id, workout, location, date) {
    let record = {
        _id,
        workout,
        location,
        date
    };

    let options = {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
    };

    await fetch(`${host}/${_id}`, options);
}

// Step 2: Function for creating elements with contents


function create(tagName, content, id) {                                          
    let element = document.createElement(tagName);

    if (id){
        element.id = id;
    }

    for (let child of content) {
        if (typeof child == 'object') {
            element.appendChild(child);
        } else {
            let node = document.createTextNode(child);
            element.appendChild(node);
        }
    }

    return element;
}
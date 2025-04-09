window.addEventListener("load", solve);

function solve() {
    let saveButton = document.getElementById('save');
    let eventInput = document.getElementById('event');
    let noteInput = document.getElementById('note');
    let dateInput = document.getElementById('date');
    let upcomingList = document.getElementById('upcoming-list');
    let eventsList = document.getElementById('events-list');
    
    let currentEvent = null;

    // Helper function to create a list item for an event
    function createEventElement(eventData) {
        let li = document.createElement('li');
        li.classList.add('event-item');
        
        let container = document.createElement('div');
        container.classList.add('event-container');
        
        let article = document.createElement('article');
        let eventName = document.createElement('p');
        eventName.textContent = `Name: ${eventData.name}`;
        
        let eventNote = document.createElement('p');
        eventNote.textContent = `Note: ${eventData.note}`;
        
        let eventDate = document.createElement('p');
        eventDate.textContent = `Date: ${eventData.date}`;
        
        article.appendChild(eventName);
        article.appendChild(eventNote);
        article.appendChild(eventDate);
        
        let buttons = document.createElement('div');
        buttons.classList.add('buttons');
        
        let editButton = document.createElement('button');
        editButton.classList.add('btn', 'edit');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editEvent(eventData, li));
        
        let doneButton = document.createElement('button');
        doneButton.classList.add('btn', 'done');
        doneButton.textContent = 'Done';
        doneButton.addEventListener('click', () => endEvent(eventData, li));
        
        buttons.appendChild(editButton);
        buttons.appendChild(doneButton);
        
        container.appendChild(article);
        container.appendChild(buttons);
        
        li.appendChild(container);
        
        return li;
    }

    // Save event
    saveButton.addEventListener('click', function () {
        let name = eventInput.value.trim();
        let note = noteInput.value.trim();
        let date = dateInput.value.trim();
        
        if (name && note && date) {
            let eventData = { name, note, date };
            
            let eventElement = createEventElement(eventData);
            upcomingList.appendChild(eventElement);
            
            // Clear input fields after adding
            eventInput.value = '';
            noteInput.value = '';
            dateInput.value = '';
        }
    });

    // Edit event
    function editEvent(eventData, li) {
        eventInput.value = eventData.name;
        noteInput.value = eventData.note;
        dateInput.value = eventData.date;
        
        // Remove event from upcoming list
        upcomingList.removeChild(li);
        
        // Store current event for later update
        currentEvent = eventData;
    }

    // End event (move to ended list)
    function endEvent(eventData, li) {
        eventsList.appendChild(li);
        
        // Remove buttons
        let buttons = li.querySelector('.buttons');
        buttons.remove();
    }

    // Delete all ended events
    let deleteButton = document.querySelector('.btn.delete');
    deleteButton.addEventListener('click', function () {
        eventsList.innerHTML = '';
    });

    // Handle edit after modifying event
    saveButton.addEventListener('click', function () {
        if (currentEvent) {
            let updatedEvent = {
                name: eventInput.value.trim(),
                note: noteInput.value.trim(),
                date: dateInput.value.trim(),
            };
            
            if (updatedEvent.name && updatedEvent.note && updatedEvent.date) {
                // Update event data
                currentEvent.name = updatedEvent.name;
                currentEvent.note = updatedEvent.note;
                currentEvent.date = updatedEvent.date;
                
                // Create and add updated event to upcoming list
                let updatedEventElement = createEventElement(currentEvent);
                upcomingList.appendChild(updatedEventElement);
                
                // Clear inputs and reset currentEvent
                eventInput.value = '';
                noteInput.value = '';
                dateInput.value = '';
                currentEvent = null;
            }
        }
    });
}

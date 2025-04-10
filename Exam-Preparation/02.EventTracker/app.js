window.addEventListener("load", solve);

function solve() {
    document.getElementById('save').addEventListener('click', onSave);          // 1. Хващам си бутоните
    document.querySelector('.delete').addEventListener('click', onDelete);

    // 2. Създавам си функциите

    function onSave(ev){                        
        ev.preventDefault();        // защото има form

        let event = document.getElementById('event').value;     // 3. Взимам си стойностите, попълнени в полетата 
        let note = document.getElementById('note').value;
        let date = document.getElementById('date').value;

        if (!event || !note || !date){
            return;
        };

        // 5. Създаваме бутоните, за да ги добавим в HTML-а и да им добавим eventListener

        let editBtn = create('button', ['Edit'], 'btn edit');
        let doneBtn = create('button', ['Done'], 'btn done');

        // 8. Добавяме eventListener-ите
        editBtn.addEventListener('click', () => onEdit(event, note, date, element));
        doneBtn.addEventListener('click', () => onDone(element));

        // 4. Създаваме си елементитите в секцията за задържане
        //    като първо си създаваме create функцията

        let element = create('li', [
            create('div', [
                create('article', [
                    create('p', [`Name: ${event}`]),
                    create('p', [`Note: ${note}`]),
                    create('p', [`Date: ${date}`])
                ]),
                create('div', [
                    editBtn,        // 6. Вкарваме бутоните в div-a
                    doneBtn
                ], 'buttons')
            ], 'event-container')
        ], 'event-item');

        // 7. Вкарваме елемента към съответния елемент в DOM-a

        let list = document.getElementById('upcoming-list');
        list.appendChild(element);

        document.querySelector('form').reset();
        
    }


    // 9. Правим onEdit функцията

    function onEdit(event, note, date, element){
        document.getElementById('event').value = event;  
        document.getElementById('note').value = note;
        document.getElementById('date').value = date;

        element.remove();
    }

    // 10. Правим onDone функцията

    function onDone(element){
        let article = element.querySelector('article');
        element.replaceChildren();
        element.appendChild(article);

        // прехвърляме го в списъка с готовите event-и
        let list = document.getElementById('events-list');
        list.appendChild(element)
    }

    // 11. Правим onDelete функцията

    function onDelete(){
        document.getElementById('events-list').replaceChildren();
    }


    // 3. Създаваме си функция за създаването на елементите

    function create(tagName, content = [], className){
        let element = document.createElement(tagName);

        for (let item of content) {
            if (typeof item != 'object'){
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }

        if (className){
            element.className = className;
        }

        return element;

    }
}

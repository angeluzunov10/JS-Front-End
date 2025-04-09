window.addEventListener("load", solve);

function solve() {
    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNext);

    function onNext(ev){
        ev.preventDefault();

        let email = document.getElementById('email').value;
        let event = document.getElementById('event').value;
        let location = document.getElementById('location').value;

        if(!email || !event || !location){
            return;
        }

        let result = create('li', [                                             // the whole element logic for the creating of an event
            create('article', [
                create('h4', [email]),
                create('p', [
                    create('strong', ['Event:']),
                    create('br', []),
                    event
                ]),
                create('p', [
                    create('strong', ['Location:']),
                    create('br', []),
                    location
                ])
            ])
        ]);

        let editBtn = create('button', ['edit']);
        editBtn.className = 'action-btn edit';
        editBtn.addEventListener('click', () => onEdit(email, event, location));
        result.appendChild(editBtn);

        let applyBtn = create('button', ['apply']);
        applyBtn.className = 'action-btn apply';
        applyBtn.addEventListener('click', () => onApply(result));
        result.appendChild(applyBtn);

        result.className = 'application';

        let list = document.getElementById('preview-list');
        list.appendChild(result);

        document.querySelector('.registerEvent').reset();
        nextBtn.disabled = true;

    }

    function onEdit(email, event, location){
        document.getElementById('email').value = email;
        document.getElementById('event').value = event;
        document.getElementById('location').value = location;

        nextBtn.disabled = false;

        document.getElementById('preview-list').replaceChildren();
    }

    function onApply(element){
        document.getElementById('event-list').appendChild(element);
        let btns = Array.from(element.querySelectorAll('button'));

        for(let btn of btns){
            btn.remove();
        }

        nextBtn.disabled = false;
    }

    function create(tagName, content){                                          // Function for creating elements with contents
        let element = document.createElement(tagName);

        for (let child of content){
            if (typeof child == 'object'){
                element.appendChild(child);
            } else {
                let node = document.createTextNode(child);
                element.appendChild(node);
            }
        }

        return element;
    }

}

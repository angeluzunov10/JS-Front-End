document.addEventListener('DOMContentLoaded', focused);

function focused() {
    //TODO
    let inputs = document.querySelectorAll('input');

    for (let input of inputs){
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    }

    function onFocus(ev){
        ev.target.parentElement.classList.add('focused');
    }

    function onBlur(ev){
        ev.target.parentElement.classList.remove('focused');
    }

}

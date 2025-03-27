document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let input = document.querySelector('input');
   	input.addEventListener('change', validateEmail);

    function validateEmail(ev) {
        const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (!emailPattern.test(ev.target.value)) {
            ev.target.classList.add("error");
        } else {
            ev.target.classList.remove("error");
        }
    }
}
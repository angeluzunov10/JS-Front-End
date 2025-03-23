function toggle() {
    //TODO

    let content = document.getElementById('extra');
    let btn = document.querySelector('.button');
    
    if (btn.textContent == 'More'){
        // Toggle ON
        btn.textContent = 'Less';
        content.style.display = 'block';
    } else {
        // Toggle OFF
        content.style.display = 'none';
        btn.textContent = 'More'
    }
}
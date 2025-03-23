function solve() {
   //TODO

   let rows = document.querySelectorAll('.container tbody tr');
   let input = document.getElementById('searchField');

   let pattern = input.value;
    
   for (let row of rows){
      if (row.textContent.includes(pattern) && pattern != ''){
         row.classList.add('select');
      } else {
         row.classList.remove('select');
      }
   }

   input.value = '';

}
function solve() {
   // TODO

   let list = document.getElementById('towns');
   let input = document.getElementById('searchText');
   let output = document.getElementById('result');

   let pattern = input.value;

   let matchesCount = 0;

   for (let row of list.children) {
      if (row.textContent.includes(pattern)){
         row.style.fontWeight = 'bold';
         row.style.textDecoration = 'underline'; 
         matchesCount += 1;
      } else {
         row.style.fontWeight = 'none';
         row.style.textDecoration = 'none'; 
      }
   }

   output.textContent = matchesCount + ' matches found';

}
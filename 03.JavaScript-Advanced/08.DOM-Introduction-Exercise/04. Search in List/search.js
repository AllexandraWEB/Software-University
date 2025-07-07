function search() {

   const searchText = document.getElementById("searchText").value;
   const listElements = document.querySelectorAll("#towns li");
   const resultRef = document.getElementById("result");

   const listArr = Array.from(listElements);
   let matches = 0;

   for(let town of listArr) {
      if(town.textContent.includes(searchText)) { // If search text includes any element of the array
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline";
         matches++;
      } else {
         town.style.fontWeight = "normal";
         town.style.textDecoration = "none";
      }
   }
   
   resultRef.textContent = `${matches} matches found`;
}

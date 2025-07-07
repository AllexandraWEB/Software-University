// function colorize() {
//     const tableRefs = document.querySelectorAll("table tr");

//     for(let i = 1; i < tableRefs.length; i += 2) {
//         tableRefs[i].style.backgroundColor = "teal";
//     }
 
// }

// Another solution

function colorize() {
    const evenRows = document.querySelectorAll("table tr:nth-child(even)");
    
    evenRows.forEach(row => {
        row.style.backgroundColor = "teal";
    });
}
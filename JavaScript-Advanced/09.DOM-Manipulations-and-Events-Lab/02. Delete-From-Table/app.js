function deleteByEmail() {
    const inputField = document.querySelector('input[name="email"]');
    const emailToDelete = inputField.value;
    const rows = Array.from(document.querySelectorAll("#customers tbody tr"));
    const result = document.getElementById("result");

    let found = false;

    for(let row of rows) {
        const emailCell = row.cells[1];

        if(emailCell.textContent === emailToDelete) {
            row.parentNode.removeChild(row);
            found = true;
            break;
        }
    }

    result.textContent = found ? 'Deleted.' : 'Not found.';
}
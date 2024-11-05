// Form and table references
const form = document.getElementById('dataForm');
const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

// Form submission handler
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission
    
    // Get form input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    // Validate inputs (basic check for empty fields)
    if (name === '' || age === '' || email === '') {
        alert('გთხოვთ შეავსოთ ყველა ველი!');
        return;
    }

    // Create new table row
    const newRow = dataTable.insertRow();

    // Insert new cells and populate them with input values
    const nameCell = newRow.insertCell(0);
    nameCell.textContent = name;

    const ageCell = newRow.insertCell(1);
    ageCell.textContent = age;

    const emailCell = newRow.insertCell(2);
    emailCell.textContent = email;

    // Clear form after submission
    form.reset();
});
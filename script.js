var selectedRow = null;

// Handle form submit
function onFormSubmit(event) {
    event.preventDefault();  // Prevent default form submission behavior
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);  // Insert new record
    } else {
        updateRecord(formData);  // Update existing record
    }
    resetForm();  // Reset the form after submit
}

// Retrieve form data
function readFormData() {
    var formData = {};
    formData["studentId"] = document.getElementById("studentId").value;
    formData["studentName"] = document.getElementById("studentName").value;
    formData["age"] = document.getElementById("age").value;
    formData["grade"] = document.getElementById("grade").value;
    return formData;
}

// Insert new record in table
function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.studentId;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.studentName;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.grade;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

// Edit data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('studentId').value = selectedRow.cells[0].innerHTML;
    document.getElementById('studentName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('age').value = selectedRow.cells[2].innerHTML;
    document.getElementById('grade').value = selectedRow.cells[3].innerHTML;
}

// Update record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.studentId;
    selectedRow.cells[1].innerHTML = formData.studentName;
    selectedRow.cells[2].innerHTML = formData.age;
    selectedRow.cells[3].innerHTML = formData.grade;
}

// Delete record
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        var row = td.parentElement.parentElement;
        document.getElementById('studentList').deleteRow(row.rowIndex);
    }
    resetForm();  // Reset form after deletion
}

// Reset form fields
function resetForm() {
    document.getElementById('studentId').value = '';
    document.getElementById('studentName').value = '';
    document.getElementById('age').value = '';
    document.getElementById('grade').value = '';
}

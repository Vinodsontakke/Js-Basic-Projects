
var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData(){
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["empCode"] = document.getElementById("empCode").value;
  formData["salary"] = document.getElementById("salary").value;
  formData["city"] = document.getElementById("city").value;
  return formData;
}

// important and more complexa function 
function insertNewRecord(data){
  var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  coll1 = newRow.insertCell(0)
  coll1.innerHTML= data.fullName;
  coll2 = newRow.insertCell(1)
  coll2.innerHTML = data.empCode;
  coll3 = newRow.insertCell(2)
  coll3.innerHTML = data.salary;
  coll4 = newRow.insertCell(3)
  coll4.innerHTML = data.city;
  coll5 = newRow.insertCell(4)
  coll5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                      <a onClick="onDelete(this)">Delete</a>`
}

function resetForm(){
  document.getElementById("fullName").value = "";
  document.getElementById("empCode").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("city").value = "";
}

function onEdit(td){
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
  document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
  document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td){
  if(confirm('Are You Sure Delete This Record ?' )){
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}


function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

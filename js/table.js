var buttons = document.getElementsByClassName('btn btn-danger');
var addButton = document.getElementsByClassName("btn-primary")[0];
var userTable = document.getElementsByTagName("table")[0];

addButton.addEventListener("click", addRow);

function removeRow(){
  this.parentNode.parentNode.remove();
}

function addRow() {
  var rowCount = document.getElementsByTagName("tr").length;
  var newRow = userTable.insertRow(rowCount - 1);
  var firstNameCell = newRow.insertCell(0);
  var lastNameCell = newRow.insertCell(1);
  var emailCell = newRow.insertCell(2);
  var deleteBtnCell = newRow.insertCell(3);

  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("X"));
  deleteButton.setAttribute("class", "btn btn-danger");

  firstNameCell.innerHTML = document.getElementById("firstName").value;
  lastNameCell.innerHTML = document.getElementById("lastName").value;
  emailCell.innerHTML = document.getElementById("email").value;
  deleteBtnCell.appendChild(deleteButton);
  deleteButton.addEventListener("click", removeRow);

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";

}

for(i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", removeRow);
}
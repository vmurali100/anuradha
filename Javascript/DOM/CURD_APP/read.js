var allUsers = [];
function getAllUsers() {
  communicateWithServer(null, "GET");
}
var myTable = document.getElementById("myTable");
function displayUsers() {
  allUsers.map((user, i) => {
    var myTr = document.createElement("tr");
    for (a in user) {
      var myTd = document.createElement("td");
      myTd.innerHTML = user[a];
      myTr.appendChild(myTd);
    }

    var editTd = document.createElement("td");
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("onclick", "editUser(" + i + ")");
    editBtn.setAttribute("class", "btn btn-warning");
    editTd.appendChild(editBtn);
    myTr.appendChild(editTd);

    var deleteTd = document.createElement("td");
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("class", "btn btn-danger");
    deleteTd.appendChild(deleteBtn);
    myTr.appendChild(deleteTd);

    myTable.appendChild(myTr);
  });
}

function editUser(i) {
  console.log(allUsers[i]);
  localStorage.setItem("user", JSON.stringify(allUsers[i]));
  window.location.href = "index.html";
}
getAllUsers();

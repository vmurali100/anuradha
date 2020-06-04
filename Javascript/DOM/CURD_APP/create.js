var user = {
  fname: "",
  lname: "",
  email: "",
};
document.getElementById("fname").addEventListener("keyup", validate);
document.getElementById("lname").addEventListener("keyup", validate);
document.getElementById("email").addEventListener("keyup", validate);
var submitButton = document.querySelector("button");
function addUser() {}

function validate() {
  let invalid = false;
  for (a in user) {
    user[a] = document.getElementById(a).value;
    if (a !== "email") {
      if (user[a].length < 3) {
        invalid = true;
      }
    } else {
      var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (!pattern.test(user[a])) {
        invalid = true;
      }
    }
  }
  if (!invalid) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", true);
  }
}

submitButton.onclick = function () {
  communicateWithServer(user, "POST");
};

function getEditUser() {
  editUser = JSON.parse(localStorage.getItem("user"));
  console.log(editUser);
  if (editUser !== null) {
    for (a in user) {
      document.getElementById(a).value = editUser[a];
    }
    validate();
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";
  }
}

getEditUser();

function updateUser() {
  let latestUser = {};
  for (a in user) {
    latestUser[a] = document.getElementById(a).value;
  }
  console.log(latestUser);
  communicateWithServer(latestUser, "PUT");
}

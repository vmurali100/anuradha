console.log("Communication ");
function communicateWithServer(data, method, id) {
  let status;
  let url = "http://localhost:3000/allUsers";
  var communicate = new XMLHttpRequest();
  communicate.onreadystatechange = function () {
    if (method == "POST") {
      status = 201;
    } else {
      status = 200;
    }
    if (communicate.status == status && communicate.readyState == 4) {
      console.log("User Created ");
      if (method == "POST" || method == "PUT") {
        window.location.href = "allUsers.html";
      } else if (method == "GET") {
        allUsers = JSON.parse(communicate.response);
        displayUsers();
      }
    }
  };
  if (method !== "PUT") {
    communicate.open(method, url);
  } else if (method == "PUT") {
    communicate.open(method, url + "/" + editUser.id);
  }
  communicate.setRequestHeader("Content-Type", "application/json");
  if (method == "POST") {
    communicate.send(JSON.stringify(data));
  } else if (method == "GET") {
    communicate.send();
  } else if (method == "PUT") {
    communicate.send(JSON.stringify(data));
  }
}

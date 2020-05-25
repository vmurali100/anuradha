function getDataFromApi() {
  fetch(
    "http://www.filltext.com/?rows=5&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
  )
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      console.log(response);
      displayData(response);
    });
}

getDataFromApi();

function displayData(data) {
  data.map((obj) => {
    let myTr = document.createElement("tr");
    for (a in obj) {
      let myTd = document.createElement("td");
      myTd.innerHTML = obj[a];
      myTr.appendChild(myTd);
    }

    // Step 1:
    let editTd = document.createElement("td");
    let deleteTd = document.createElement("td");

    //Creating edit Button and Adding text to it ,
    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "btn btn-warning");
    editBtn.innerHTML = "Edit";

    //Adding Edit Button to Edit Td
    editTd.appendChild(editBtn);

    //Creating Delete Button And adding "Delete" to it
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "btn btn-danger");
    deleteBtn.innerHTML = "Delete";

    deleteTd.appendChild(deleteBtn);
    //Adding Tds to Tr
    myTr.appendChild(editTd);
    myTr.appendChild(deleteTd);

    document.getElementById("myTable").appendChild(myTr);
  });
}

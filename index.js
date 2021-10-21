var colorVal = "";

function getPickerValue(e) {
  console.log(e);
  colorVal = e;
  document.getElementById("conatinermain").style.borderColor = e;
  document.getElementById("addTaskButton").style.borderColor = e;
  document.getElementById("toggleicon").style.background = e;
  document.getElementById("calendarIcon").style.background = e;
  document.getElementById("dropdown-select").style.background = e;
  document.getElementById("addTaskButton").style.background = e;
  if(e === 'green' || e === 'red'){
      document.getElementById("addTaskButton").style.color = "#fff";
      document.getElementById("listeditem").style.color = "#fff";

  }
}

function addTask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("newItem").value;
  var inputDate = document.getElementById("dateCal").value;
  if (inputValue === "") {
    alert("Please add list");
  } else if (inputDate === "") {
    alert("Please select date");
  } else {
    li.innerHTML =
      "<label class='mr-3 normal-text'>" +
      inputValue +
      "</label>" +
      "<span class='normal-text'>" +
      inputDate +
      "</span>";
    document.getElementById("toDo").appendChild(li);
    document.getElementById("newItem").value = "";
  }
}

//toggle

function toggleIcon() {
    if(document.getElementById("newItem").style.display != "none"){
        document.getElementById("textareaItem").style.display = "block";
        document.getElementById("newItem").style.display = "none";
    } else{
        document.getElementById("textareaItem").style.display = "none";
        document.getElementById("newItem").style.display = "block";
    }
}
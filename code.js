let count = 0;

function addTask() {
  console.log(count);
  let taskText = document.getElementById("taskText").value;
  console.log(taskText);
  let list = document.getElementById("list");
  let newCheckBox = document.createElement("input");
  newCheckBox.type = "checkbox";
  newCheckBox.id = `${count}`;
  newCheckBox.name = `task${count}`;
  newCheckBox.class = "taskItem";
  newCheckBox.onclick = function () {
    if (newCheckBox.checked) {
      count--;
      update();
    } else {
      count++;
      update();
    }
  };
  let newLabel = document.createElement("p");
  newLabel.innerHTML = `  ${taskText}`;
  newLabel.style = "display: inline;";
  newLabel.id = `label${count}`;
  if (count) list.appendChild(document.createElement("br"));
  list.appendChild(newCheckBox);
  list.appendChild(newLabel);
  list.appendChild(document.createElement("br"));
  count++;
  update();
}

function update() {
  document.getElementById("heading").innerHTML = `Tasks to do: ${count}`;
}

function clearAll() {
  count = 0;
  document.getElementById("list").innerHTML = "";
  update();
}

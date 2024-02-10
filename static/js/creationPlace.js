function AddAction() {
    var Action1 = document.getElementById("NewAction");
    let textarea = document.createElement("textarea");
    Action1.appendChild(textarea);
    textarea.value = "Initial content";
    textarea.setAttribute("cols", "50");
    var addaddButton = document.createElement("button");
    addaddButton.innerHTML = "Add";
    addaddButton.setAttribute("id", "addButton");
    Action1.appendChild(addaddButton);
}


window.onload = function() {
const addActionBtn = document.getElementById("NewAction");
addActionBtn.addEventListener("click", AddAction);
}
var limitofActions = 25;
var numberOfActions = 0;

function AddAction() {
   
        var Action1 = document.getElementById("NewAction");
        let textarea = document.createElement("textarea");
        Action1.appendChild(textarea);
        textarea.setAttribute("id", "action");
        textarea.value = "Initial content";
        textarea.setAttribute("cols", "50");
        var addaddButton = document.createElement("button");
        addaddButton.innerHTML = "Add";
        addaddButton.setAttribute("id", "addButton");
        Action1.appendChild(addaddButton);
        numberOfActions++;
        
    }
    if (numberOfActions == limitofActions) {
        var importantMessage = document.createElement("p");
        importantMessage.innerHTML = "You have reached the limit of actions";
        Action1.appendChild(importantMessage);
}


window.onload = function() {
const addActionBtn = document.getElementById("NewAction");
addActionBtn.addEventListener("click", AddAction);
}
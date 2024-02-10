// Define the limit of actions
const limitOfActions = 25;
let numberOfActions = 0;

function addAction() {
    const action = document.getElementById("AddAction");
    const textarea = document.createElement("textarea");
    action.appendChild(textarea);
    textarea.setAttribute("id", "action");
    textarea.value = "Initial content";
    textarea.setAttribute("cols", "50");
    numberOfActions++;

    if (numberOfActions === limitOfActions) {
        const importantMessage = document.createElement("p");
        importantMessage.innerHTML = "You have reached the limit of actions";
        // Assuming you have an element with ID "Action1"
        Action1.appendChild(importantMessage);
    }
}

function removeAction() {
    const action = document.getElementById("RemoveAction");
    const textarea = document.getElementById("action");
    Action1.removeChild(textarea);
    numberOfActions--;
}

function stopAction() {
    const action = document.getElementById("StopAction");
    const textarea = document.getElementById("action");
    textarea.disabled = true;
}

window.onload = function () {
    const addActionBtn = document.getElementById("AddAction");
    addActionBtn.addEventListener("click", addAction);
    const removeActionBtn = document.getElementById("RemoveAction");
    removeActionBtn.addEventListener("click", removeAction);
    const stopActionBtn = document.getElementById("StopAction");
    stopActionBtn.addEventListener("click", stopAction);
};

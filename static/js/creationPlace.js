// Define the limit of actions
const limitOfActions = 25;
let numberOfActions = 0;
const actions = []; 
let textarea;// Global array to store actions

function addAction() {
    const textarea = document.createElement("textarea");
    textarea.setAttribute("id", "action");
    textarea.value = "Initial content";
    textarea.setAttribute("cols", "50");
    document.getElementById("AddAction").parentElement.appendChild(textarea);
    actions.push(textarea); // Add the textarea to the global array
    numberOfActions++;

    if (numberOfActions === limitOfActions) {
        const importantMessage = document.createElement("p");
        importantMessage.innerHTML = "You have reached the limit of actions";
        document.getElementById("AddAction").appendChild(importantMessage);
    }
}

function removeAction() {
    const textarea = document.getElementById("action");
    document.getElementById("RemoveAction").removeChild(textarea);
    actions.pop(); // Remove the last textarea from the global array
    numberOfActions--;
}

function stopAction() {
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

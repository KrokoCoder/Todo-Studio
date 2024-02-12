// Define the limit of actions
const limitOfActions = 25;
let numberOfActions = 0;
const actions = []; 
let textarea;// Global array to store actions

function addAction() {
    const textarea = document.createElement("textarea");
    textarea.setAttribute("id", "action");
    textarea.setAttribute ("placeholder", "Enter the action");
    textarea.setAttribute("cols", "50");
    document.getElementById("AddAction").parentElement.appendChild(textarea);
    actions.push(textarea); // Add the textarea to the global array
    numberOfActions++;

    if (numberOfActions === limitOfActions) {
        alert("You have reached the limit of actions");
        
    }
}

function removeAction() {
    if (numberOfActions > 0) {
        const textarea = actions.pop();
        textarea.remove();
        numberOfActions--;
    }
}


window.onload = function () {
    const addActionBtn = document.getElementById("AddAction");
    addActionBtn.addEventListener("click", addAction);
    const removeActionBtn = document.getElementById("RemoveAction");
    removeActionBtn.addEventListener("click", removeAction);
};

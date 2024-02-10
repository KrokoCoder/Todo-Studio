var todoname;


function ToDoName() {
    var inputTodoName = document.getElementById("todoName"); // Renamed variable
    var createTodo = document.getElementById("createTodo");
    createTodo.addEventListener("click", function(e) {
        e.preventDefault();

        if (inputTodoName.value === "" || inputTodoName.value === null) {
            console.log("Please enter a name for your todo.");
        } else {
            console.log("Todo name: " + inputTodoName.value);
        }
    });
}




window.onload = function() {
    const todoNameInput = document.getElementById("todoName");
    todoNameInput.addEventListener("click", ToDoName);
}

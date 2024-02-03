window.onload = function(){
var todoname = document.getElementById("todoName");
var create = document.getElementById("createTodo");
create.addEventListener("click", function(e){
    e.preventDefault();

    if (todoname.value === "" || todoname.value === null){
        console.log("Please enter a name for your todo");
    }
    else{
        console.log(todoname.value);
    }
});
}


  
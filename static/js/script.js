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


   
window.onload = function(){{
    var action  = document.getElementById("NewAction");
    var add = document.createElement("textarea");
    add.setAttribute("rows", "4");
    add.setAttribute("cols", "50");
    add.id = "action";
    action.appendChild(add);
    action.style.marginTop = "50px";
}
}
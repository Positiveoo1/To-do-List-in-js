const form = document.getElementById("task-form");
const taskList = document.getElementById("tasks");

form.onsubmit = function (e){
    e.preventDefault();

    const inputField = document.getElementById("task-input")
    addTask(inputField.value);
    form.reset();
}

function addTask(deck) {
    if(deck == '') {
        alert("write somethin")
    }else {
        const taskCont = document.createElement('div');
        const newTask = document.createElement('input')
        const taskLabel = document.createElement('label');
        const remove = document.createElement('p');
    
        const taskDec = document.createTextNode(deck)
        newTask.setAttribute("type", "checkbox");
        newTask.setAttribute("name", "deck");
        newTask.setAttribute("id", "deck");
    
        taskLabel.setAttribute("for", "deck");
        taskLabel.appendChild(taskDec);
        taskCont.classList.add("task-item");
        taskCont.appendChild(newTask);
        taskCont.appendChild(taskLabel);
        taskList.appendChild(taskCont)
        taskCont.appendChild(remove);
        taskCont.style.cssText = "transform: translateX(40px)"
        remove.innerText = "X";
        remove.setAttribute("class", "close")
        

        remove.addEventListener('click', function() {
            taskCont.remove();
        });  
    }
    
}

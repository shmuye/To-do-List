const toDoContainer = document.getElementById('toDoContainer');
const inputEl = document.getElementById('taskInput');
const taskContainer = document.getElementById('taskContainer');
function addTask(){
   

    
    if (!inputEl.value){
        window.alert('please enter a task');
    }else{
        const pEl = document.createElement('p');
        const checkboxEl = document.createElement('input');
        checkboxEl.type = 'checkbox';
        checkboxEl.classList.add('checkbox')
        pEl.appendChild(checkboxEl);
        const textNode = document.createTextNode(inputEl.value);
        pEl.appendChild(textNode);
        pEl.classList.add('par');
        taskContainer.appendChild(pEl)
        inputEl.value = '';
    }
}
function deleteTask(){
    const tasks = document.querySelectorAll('#taskContainer p');
    tasks.forEach(task=>{
        const checkbox = task.querySelector('input[type="checkbox"]');
        if(checkbox.checked){
            taskContainer.removeChild(task);
        }
    })
}








const addProjects = document.querySelector("#addproject");
const addTask = document.querySelector("#Add_Task");

function task(title, description, priority, dueDate){
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    return {title, description, priority, dueDate};
}

function todoList(name){
    this.name = [];

    return {name};
}


function addTaskToList(task, list){
    list.append(task);
    return list;
}

function createTodoList(name){
    const newProject = document.createElement("li");
    newProject.innerHTML = "<a href='#'>Default</a>";
    document.getElementById("projects").appendChild(newProject);
}
addProjects.addEventListener("click", () => createTodoList());
addTask.addEventListener

const defaultList = todoList();
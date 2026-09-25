import { allProjects } from "./project.js";
import { allTasks, createTask } from "./task.js";

const container = document.querySelector("html");
const taskForm = document.querySelector(".task-form");

function showTaskForm() {
    container.addEventListener("click", (event) => {
        const target = event.target.closest(".add-task");
        if (target) {
            taskForm.showModal();
            updateProjects();
        }
    });
}

function closeTaskForm() {
    container.addEventListener("click", (event) => {
        const target = event.target.closest(".cancel");
        if (target) {
            taskForm.close();
            clearProjects();
        }
    });
}

function createTaskObj() {
    container.addEventListener("click", (event) => {
        const target = event.target.closest(".create-task");
        if (target) {
            registerTask();

            for (const task of allTasks) {
    console.log(task);
}
            taskForm.close();
        }
    });
}
 
export function formActions() {
    showTaskForm();
    closeTaskForm();
    createTaskObj();
}

// update inboxes
function updateProjects() {
    const select = document.querySelector("#projects");
    for (const p of allProjects) {
        let option = document.createElement("option");
        option.value = p.title;
        option.textContent = p.title;
        option.dataset.id = p.id;
        select.appendChild(option);
    }
}

// clear inboxes - will need to fix to have 'Inbox' be persistent??
function clearProjects() {
    const select = document.querySelector("#projects");
    if (select.hasChildNodes()) {
        select.replaceChildren();
    }
}

// register task
// need to register the project id - if no projects, should just be undefined (which will go in inbox)
function registerTask() {
    const title = taskForm.querySelector("#task-title");
    const description = taskForm.querySelector("#description");
    const due = taskForm.querySelector("#due-date");
    const priority = taskForm.querySelector("#priority");

    console.log({ title, description, due, priority }); // delete this

    createTask(title.value, description.value, due.value, priority.value);
    clearTaskForm();
}

// clear task form
function clearTaskForm() {
    //taskForm.document.querySelectorAll('input[]', 'textarea').forEach(input => input.value = '');
    document.getElementById("registration-form").reset();
}
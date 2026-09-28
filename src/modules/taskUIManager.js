import { allProjects } from "./project.js";
import { resetCurrentView } from "./projectUIManager.js";
import { getCurrentView } from "./state.js";
import { createTask } from "./task.js";

const container = document.querySelector("html");
const taskForm = document.querySelector(".task-form");
const taskCard = document.querySelector(".task-card");
 
export function formActions() {
    container.addEventListener("click", (event) => {
        if (event.target.closest(".add-task")) {
            taskForm.showModal();
            updateProjects();
        }

        if (event.target.closest(".cancel")) {
            taskForm.close();
            clearProjects();
        }

        if (event.target.closest(".create-task")) {
            taskForm.close();
            registerTask();
            clearProjects();
            resetCurrentView();
        }
    });
}

// update inboxes in the form
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
    const inbox = taskForm.querySelector("#projects");

    // get the project id, if a project is selected for the task to live in
    const inboxID = inbox.selectedOptions[0]?.dataset.id;
    createTask(title.value, description.value, due.value, priority.value, inboxID);
    clearTaskForm();
}

function clearTaskForm() {
    document.getElementById("registration-form").reset();
}

// ** this will be called in load tasks in projectUI **
export function renderTaskCard(task) {
    const taskObj = taskCard.cloneNode(true);
    const taskTitle = taskObj.querySelector("#task-item");
    const taskDate = taskObj.querySelector("#date-text");
    const taskPriority = taskObj.querySelector("#priority-display");

    taskTitle.textContent = task.title;
    taskDate.textContent = task.date;
    if (task.priority === "0") {
        taskPriority.textContent = "Low";
    } else if (task.priority === "1") {
        taskPriority.textContent = "Medium";
    } else {
        taskPriority.textContent = "High";
    }

    // will need to upload the description (or this can be a separate function when the task is expanded)
    taskObj.dataset.id = task.id;
    return taskObj;
}
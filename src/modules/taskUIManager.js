import { allProjects, getProject } from "./project.js";
import { resetCurrentView } from "./projectUIManager.js";
import { createTask, deleteTask, editTask, getTask } from "./task.js";

const container = document.querySelector("html");
const taskForm = document.querySelector(".task-form");
const taskEditForm = document.getElementById("edit-task-form");
const taskCard = document.querySelector(".task-card");

// separate this out and use method=dialog
function openAddTask() {
    container.addEventListener("click", (event) => {
        const addTaskBtn = event.target.closest(".add-task");
        if (addTaskBtn) {
            taskForm.showModal();
            const taskFormSelect = taskForm.querySelector("#projects");
            updateProjects(taskFormSelect);
        }
    });
}

function handleTaskFormActions() {
    taskForm.addEventListener("close", () => {
        const action = taskForm.returnValue;
        const taskFormSelect = taskForm.querySelector("#projects");
        if (action == "confirm") {
            registerTask();
            clearProjects(taskFormSelect);
            resetCurrentView();
        } else {
            clearProjects(taskFormSelect);
        }
    });
}

function updateProjects(currentFormSelect) {
    for (const p of allProjects) {
        let option = document.createElement("option");
        option.value = p.title;
        option.textContent = p.title;
        option.dataset.id = p.id;
        currentFormSelect.appendChild(option);
    }
}

// clear inboxes - will need to fix to have 'Inbox' be persistent??
function clearProjects(currentFormSelect) {
    //const select = document.querySelector("#projects");
    if (currentFormSelect.hasChildNodes()) {
        currentFormSelect.replaceChildren();
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

function handleTaskDeletion() {
    container.addEventListener("click", (event) => {
        const delBtn = event.target.closest("#delete");
        if (!delBtn) { return; }

        const task = event.target.closest(".task-card");
        if (!task) { return; }

        const taskID = task.dataset.id;
        deleteTask(taskID);
        resetCurrentView();
    });
}

// open task edit
function openTaskEdit() {
    container.addEventListener("click", (event) => {
        const taskCard = event.target.closest(".task-card");
        if (!taskCard) return;

        const editBtn = event.target.closest("#edit-task");
        if (editBtn) {
            const id = taskCard.dataset.id;
            taskEditForm.dataset.activeTaskID = id;
            const task = getTask(id);
            const taskTitle = taskEditForm.querySelector("#edit-task-title");
            const taskDescription = taskEditForm.querySelector("#edit-description");
            const taskDueDate = taskEditForm.querySelector("#edit-due-date");
            const taskPriority = taskEditForm.querySelector("#edit-priority");
            const taskCurrentInbox = taskEditForm.querySelector("#edit-projects");
            updateProjects(taskCurrentInbox);

            // populate the form fields
            taskTitle.value = task.title;
            taskDescription.value = task.description;
            taskDueDate.value = task.date;
            taskPriority.value = task.priority;

            // set the current project
            /* const project = getProject(task.projectID);
            taskCurrentInbox.value = project.value; */

            taskEditForm.showModal();
        }
    });
}

function handleTaskEdit() {
    taskEditForm.addEventListener("close", () => {
        const action = taskEditForm.returnValue;

        if (action === "confirm") {
            // parse form inputs back into task
            const taskTitle = taskEditForm.querySelector("#edit-task-title");
            const taskDescription = taskEditForm.querySelector("#edit-description");
            const taskDueDate = taskEditForm.querySelector("#edit-due-date");
            const taskPriority = taskEditForm.querySelector("#edit-priority");
            const taskCurrentInbox = taskEditForm.querySelector("#edit-projects");

            const newTitle = taskTitle.value;
            const newDescription = taskDescription.value;
            const newDueDate = taskDueDate.value;
            const newPriority = taskPriority.value;
            //const newProject = taskCurrentInbox.dataset.id;
            const taskID = taskEditForm.dataset.activeTaskID;
            
            editTask(taskID, newTitle, newDescription, newDueDate, newPriority);

            clearProjects(taskCurrentInbox);
            resetCurrentView();
        }
    });
}

export function taskUIInit() {
    openAddTask();
    openTaskEdit();
    handleTaskFormActions();
    handleTaskDeletion();
    handleTaskEdit();
}
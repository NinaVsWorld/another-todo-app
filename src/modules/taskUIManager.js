import { allProjects } from "./project.js";
import { allTasks } from "./task.js";

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
 
export function formActions() {
    showTaskForm();
    closeTaskForm();
}

// update inboxes
function updateProjects() {
    const select = document.querySelector("#projects");
    for (const p of allProjects) {
        // create an <option>, set value and text content to p.title and dataset.id = p.id
        let option = document.createElement("option");
        option.value = p.title;
        option.textContent = p.title;
        option.dataset.id = p.id;
        // add <option> to select
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
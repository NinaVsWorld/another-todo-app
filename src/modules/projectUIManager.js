import { createProject, allProjects, getProject } from "./project.js";
import { allTasks } from "./task.js";
import { renderTaskCard } from "./taskUIManager.js";

const projForm = document.querySelector(".project-form");
const projectCard = document.querySelector(".project-card");
const projectList = document.querySelector(".projects-list");
const container = document.querySelector("html");

let currentProject;

export function projFormActions() {
    container.addEventListener("click", (event) => {
        if (event.target.className == "add-proj") {
            projForm.showModal()
        }

        if (event.target.className == "cancel") {
            projForm.close();
        }

        if (event.target.className == "create-project") {
            registerProject();
            projForm.close();
            renderProjects();
        }
    });
}

function registerProject() {
    const projTitle = projForm.querySelector(".project-title");
    createProject(projTitle.value);
    projTitle.value = "";
}

// clear existing projects and re-render
function renderProjectsMenu() {
    // clear existing projects
    while (projectList.firstChild) {
        projectList.removeChild(projectList.firstChild);
    }

    // render projects
    allProjects.forEach(p => displayProject(p));
}

function displayProject(proj) {
    const project = projectCard.cloneNode(true);
    project.style.display = "block";
    project.querySelector(".card-title").textContent = proj.title;
    project.dataset.id = proj.id;
    projectList.append(project);
}

// when clicking on each card, wipe the main page and add all tasks
export function renderProject() {
    container.addEventListener("click", (event) => {
        const target = event.target.closest(".project-card");
        if (target) {
            // get the target
            const projID = target.dataset.id;
            const project = getProject(projID);
            clearPage();
            renderPage(project);

            // track the current project
            currentProject = project;
        }
    });
}

function clearPage() {
    const pageTitle = document.querySelector("#page-title");
    pageTitle.textContent = "";
    // clear tasks
}

function renderPage(title, tasksArr) {
    const page = document.querySelector("#task-list");
    pageTitle.textContent = title;
    // wipes screen
    if (page.hasChildNodes) { page.replaceChildren(); }
    // loops thru taskArr
    for (const task of tasksArr) {
        // draws the cards
        const taskCard = renderTaskCard(task);
        taskCard.style.display = "flex";
        page.appendChild(taskCard);
    }
}

// if the add-task button is clicked within a project
// either, re-render the task list or just append to the existing list
// easier to just re-render (maybe no, append?), once create is clicked
// NEED a currentProject variable - otherwise how will i know to re-render the "same" page?
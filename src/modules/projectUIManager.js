import { createProject, allProjects, getProject } from "./project.js";
import { renderTaskCard } from "./taskUIManager.js";

const projForm = document.querySelector(".project-form");
const projectCard = document.querySelector(".project-card");
const projectList = document.querySelector(".projects-list");
const container = document.querySelector("html");

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
function renderProjects() {
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

// when clicking on each card, wipe the main page
// update page title
// and then worry about rendering tasks later (will have to import from taskUImanager??)
export function renderProject() {
    container.addEventListener("click", (event) => {
        const target = event.target.closest(".project-card");
        if (target) {
            // get the target
            const projID = target.dataset.id;
            const project = getProject(projID);
            const projTitle = project.title;
            clearPage();
            updatePageTitle(projTitle); // combine this with rendering the task??
        }
    });
}

function clearPage() {
    const pageTitle = document.querySelector("#page-title");
    pageTitle.textContent = "";
    // clear tasks
}

function updatePageTitle(title) {
    const pageTitle = document.querySelector("#page-title");
    pageTitle.textContent = title;
}

// load tasks
// loop thru all tasks, append to the page any tasks that have a matching projID
// this function will be called in renderProject
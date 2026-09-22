import { createProject, allProjects, getProject } from "./project.js";

const projForm = document.querySelector(".project-form");
const projectCard = document.querySelector(".project-card");
const projectList = document.querySelector(".projects-list");
const container = document.querySelector("html");

function showProjForm() {
    container.addEventListener("click", (event) => {
        const target = event.target.closest(".add-proj");
        if (target) { projForm.showModal(); }
    });
}

function closeProjForm() {
    container.addEventListener("click", (event) => {
        const target = event.target.closest(".cancel");
        if (target) { projForm.close(); }
    });
}

function addProject() {
    container.addEventListener("click", (event) => {
        const target = event.target.closest(".create-project");
        if (target) { 
            registerProject(); 
            projForm.close();
            renderProject();
        }
    });
}

export function projFormActions() {
    showProjForm();
    closeProjForm();
    addProject();
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
            // update the page title
            clearPage();
            updatePage(projTitle);
        }
    });
}

function clearPage() {
    const pageTitle = document.querySelector("#page-title");
    pageTitle.textContent = "";
    // clear tasks
}

function updatePage(title) {
    const pageTitle = document.querySelector("#page-title");
    pageTitle.textContent = title;
    // load tasks
}
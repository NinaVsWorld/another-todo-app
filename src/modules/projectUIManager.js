import { createProject, allProjects } from "./project.js";

const projForm = document.querySelector(".project-form");
const projectCard = document.querySelector(".project-card");
const projectList = document.querySelector(".projects-list");
const container = document.querySelector("html");

export function showProjForm() {
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

function displayProjPage() {

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
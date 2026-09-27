import { createProject, allProjects, getProject } from "./project.js";
import { allTasks } from "./task.js";
import { renderTaskCard } from "./taskUIManager.js";

const projForm = document.querySelector(".project-form");
const projectCard = document.querySelector(".project-card");
const projectList = document.querySelector(".projects-list");
const container = document.querySelector("html");

let currentProject;

function projFormActions() {
    container.addEventListener("click", (event) => {
        if (event.target.closest(".add-proj")) { projForm.showModal(); }

        if (event.target.closest(".cancel")) { projForm.close(); }

        if (event.target.closest("create-project")) {
            registerProject();
            projForm.close();
            renderProjectsMenu();
        }
    });
}

function registerProject() {
    const projTitle = projForm.querySelector(".project-title");
    createProject(projTitle.value);
    projTitle.value = "";
}

// clear existing projects and display projects in sidebar
function renderProjectsMenu() {
    projectList.replaceChildren();
    allProjects.forEach(p => displayProject(p));
}

function displayProject(proj) {
    const project = projectCard.cloneNode(true);
    project.style.display = "block";
    project.querySelector(".card-title").textContent = proj.title;
    project.dataset.id = proj.id;
    projectList.append(project);
}

// Page rendering functions
function renderPage(title, tasksArr) {
    const page = document.querySelector("#task-list");
    const pageTitle = document.querySelector("#page-title");
    pageTitle.textContent = title;
    // wipes screen
    page.replaceChildren();
    // loops thru taskArr
    for (const task of tasksArr) {
        // draws the cards
        const taskCard = renderTaskCard(task);
        taskCard.style.display = "flex";
        page.appendChild(taskCard);
    }
}

// Data filter functions - inboxes
function loadTodayTasks() {

}

function loadUpcomingTasks() {

}

function loadCompletedTasks() {
    const completedTasks = allTasks.filter(task => task.completed === true);
    renderPage("Completed", completedTasks);
}

function loadInbox() {
    const inboxTasks = allTasks.filter(task => task.projectID === undefined && task.completed === false);
    renderPage("Inbox", inboxTasks);
}

// Data filter functions - projects
function loadProject(projID) {
    const project = getProject(projID);
    const projectTitle = project.title;
    const projectTasks = allTasks.filter(task => task.projectID === projID && task.completed === false);
    renderPage(projectTitle, projectTasks);
    currentProject = project;
}

// event listeners - side bar
function handleProjectClicks() {
    container.addEventListener("click", (event) => {
        const target = event.target.closest(".project-card");
        if (target) {
            const projectID = target.dataset.id;
            loadProject(projectID);
        }
    });
}

// event listeners - handle inboxes
function handleInboxesClick() {
    container.addEventListener("click", (event) => {
        if (event.target.closest("#today")) { loadTodayTasks(); }

        if (event.target.closest("#upcoming")) { loadUpcomingTasks(); }

        if (event.target.closest("#inbox")) { loadInbox(); }

        if (event.target.closest("#completed")) { loadCompletedTasks(); }
    });
}

// master event listener function
export function init() {
    projFormActions();
    handleInboxesClick();
    handleProjectClicks();
}

// if the add-task button is clicked within a project
// either, re-render the task list or just append to the existing list
// easier to just re-render (maybe no, append?), once create is clicked
// NEED a currentProject variable - otherwise how will i know to re-render the "same" page?
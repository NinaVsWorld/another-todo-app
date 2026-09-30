import { createProject, allProjects, getProject, deleteProject } from "./project.js";
import { allTasks } from "./task.js";
import { renderTaskCard } from "./taskUIManager.js";
import { getCurrentView, setCurrentView } from "./state.js";
import { parseISO, isToday, isThisISOWeek, addDays, startOfToday, isAfter } from "date-fns";

const projForm = document.querySelector(".project-form");
const projectCard = document.querySelector(".project-card");
const projectList = document.querySelector(".projects-list");
const container = document.querySelector("html");

function projFormActions() {
    container.addEventListener("click", (event) => {
        if (event.target.closest(".add-proj")) { projForm.showModal(); }

        if (event.target.closest(".cancel")) { projForm.close(); }

        if (event.target.closest(".create-project")) {
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
    const todaysTasks = allTasks.filter(task => {
        const dueDate = task.date;
        const result = parseISO(dueDate);
        if (isToday(result) && !task.completed) {
            return task;
        };
    });

    renderPage("Today", todaysTasks);
    setCurrentView(document.getElementById("today").dataset.id);
}

function loadThisWeek() {
    const thisWeeksTasks = allTasks.filter(task => {
        const dueDate = task.date;
        const result = parseISO(dueDate);
        if (isThisISOWeek(result) && !task.completed) {
            return task;
        }
    });

    renderPage("This Week", thisWeeksTasks);
    setCurrentView(document.getElementById("this-week").dataset.id);;
}

function loadNextWeek() {
    const nextWeeksTasks = allTasks.filter(task => {
        const dueDate = task.date;
        const result = parseISO(dueDate);
        const week = addDays(startOfToday(), 7);
        if (isAfter(result, week) && !task.completed) {
            return task;
        }
    });

    renderPage("Next Week", nextWeeksTasks);
    setCurrentView(document.getElementById("next-week").dataset.id);
}

function loadCompletedTasks() {
    const completedTasks = allTasks.filter(task => task.completed === true);
    renderPage("Completed", completedTasks);
    setCurrentView(document.getElementById("completed").dataset.id);
}

function loadInbox() {
    const inboxTasks = allTasks.filter(task => task.projectID === undefined && task.completed === false);
    renderPage("Inbox", inboxTasks);
    setCurrentView(document.getElementById("inbox").dataset.id);
}

// Data filter functions - projects
function loadProject(projID) {
    const project = getProject(projID);
    const projectTitle = project.title;
    const projectTasks = allTasks.filter(task => task.projectID === projID && task.completed === false);
    renderPage(projectTitle, projectTasks);
    setCurrentView(projID);
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

        if (event.target.closest("#this-week")) { loadThisWeek(); }

        if (event.target.closest("#next-week")) { loadNextWeek(); }

        if (event.target.closest("#inbox")) { loadInbox(); }

        if (event.target.closest("#completed")) { loadCompletedTasks(); }
    });
}

// when a project is deleted, need to reset/set currentViewID to something else
// when a project is deleted, need to reset the currentView to whatever the new currentViewID is
// event listeners - delete projects
function handleProjectDeletion() {
    container.addEventListener("click", (event) => {
        console.log(event.target);
        const delBtn = event.target.closest("#proj-delete");
        if (!delBtn) { return; }
        
        const project = event.target.closest(".project-card");
        if (!project) { return; }

        const projID = project.dataset.id;
        deleteProject(projID);
        setCurrentView("inbox");
        renderProjectsMenu();
        resetCurrentView();
    });
}

// reload current view when adding a new task and if that task happens to belong to our current view
export function resetCurrentView() {
    const currentViewID = getCurrentView();
    switch (currentViewID) {
        case "today":
            loadTodayTasks();
            break;
        case "this-week":
            loadThisWeek();
            break;
        case "next-week":
            loadNextWeek();
            break;
        case "inbox":
            loadInbox();
            break;
        case "completed":
            loadCompletedTasks();
            break;
        default:
            if (currentViewID) {
                loadProject(currentViewID);
            }
    }
}

// master event listener function
export function init() {
    projFormActions();
    handleInboxesClick();
    handleProjectClicks();
    handleProjectDeletion();
}
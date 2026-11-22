import { createProject, allProjects, getProject, deleteProject, editProject } from "./project.js";
import { allTasks } from "./task.js";
import { renderTaskCard, container } from "./taskUIManager.js";
import { getCurrentView, setCurrentView } from "./state.js";
import { parseISO, isToday, isThisISOWeek, endOfISOWeek, startOfToday, isAfter } from "date-fns";
import { deleteSearchBar } from "./search.js";

const projForm = document.querySelector(".project-form");
const projEditForm = document.getElementById("edit-project-form");
const projectCard = document.querySelector(".project-card");
const projectList = document.querySelector(".projects-list");
const menu = document.querySelector(".menu");

function openAddProject() {
    container.addEventListener("click", (event) => {
        const addProjBtn = event.target.closest(".add-proj");
        if (addProjBtn) { projForm.showModal(); }
    });
}

function handleProjFormActions() {
    projForm.addEventListener("close", () => {
        const action = projForm.returnValue;

        if (action == "confirm") {
            registerProject();
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
    project.style.display = "flex";
    project.querySelector(".card-title").textContent = proj.title;
    project.dataset.id = proj.id;
    projectList.append(project);
}

// Page rendering functions
function renderPage(title, tasksArr) {
    const listContainer = container.querySelector(".list-container");
    const addTaskBtn = document.querySelector("#add-task-btn");

    if (addTaskBtn.style.display === "none") {
        addTaskBtn.style.display = "";
    }

    const pageTitle = document.querySelector("#page-title");

    pageTitle.textContent = title;
    deleteSearchBar();
    renderTasks(tasksArr);
}

export function renderTasks(tasksArr) {
    const page = document.getElementById("task-list");
    page.replaceChildren();
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
        const endOfWeek = endOfISOWeek(startOfToday(), {weekStartsOn: 1});
        if (isAfter(result, endOfWeek) && !task.completed) {
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
    const inboxTasks = allTasks.filter(task => task.projectID === "inbox" && task.completed === false);
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
        if (event.target.closest(".ellipse-menu")) { return; }
        const target = event.target.closest(".project-card");
        if (target) {
            const projectID = target.dataset.id;
            loadProject(projectID);
            removeActiveStateProjects(projectID);
            target.classList.add("is-active");
        }
    });
}

function removeActiveStateProjects(projId) {
    container.querySelectorAll(".is-active").forEach(proj => {
        if (proj.dataset.id !== projId) {
            proj.classList.remove("is-active");
        }
    });
}

function toggleSideBar() {
    const toggleBtn = container.querySelector(".toggle-btn");
    toggleBtn.addEventListener("click", (event) => {
        menu.classList.toggle("collapsed");
    })
}

// event listeners - handle inboxes
function handleInboxesClick() {
    container.addEventListener("click", (event) => {
        const todayInbox = event.target.closest("#today");
        const thisWeekInbox = event.target.closest("#this-week");
        const nextWeekInbox = event.target.closest("#next-week");
        const inbox = event.target.closest("#inbox");
        const completed = event.target.closest("#completed");

        if (todayInbox) { 
            loadTodayTasks(); 
            removeActiveState(todayInbox);
            todayInbox.classList.add("is-active");
        }

        if (thisWeekInbox) { 
            loadThisWeek(); 
            removeActiveState(thisWeekInbox);
            thisWeekInbox.classList.add("is-active");
        }

        if (nextWeekInbox) { 
            loadNextWeek(); 
            removeActiveState(nextWeekInbox);
            nextWeekInbox.classList.add("is-active");
        }

        if (inbox) { 
            loadInbox();
            removeActiveState(inbox);
            inbox.classList.add("is-active");
        }

        if (completed) { 
            loadCompletedTasks(); 
            removeActiveState(completed);
            completed.classList.add("is-active");
        }
    });
}

// remove active state from non-selected inboxes
export function removeActiveState(inbox) {
    container.querySelectorAll(".is-active").forEach(box => {
        if (box.id !== inbox.id) {
            box.classList.remove("is-active");
        }
    });
}

// opening the project ellipsis menu
function initProjectMenuEvents() {
    container.addEventListener("click", (event) => {
        const projectCard = event.target.closest(".project-card");
        if (!projectCard) { 
            if (event.target.closest(".ellipse-menu")){
                return;
            }
            closeAllMenus();
            return;
        }

        const menu = projectCard.querySelector(".ellipse-menu");

        // open the ellipse menu
        if (event.target.closest(".menu-btn")) {
            const isOpen = menu.classList.contains("open");
            closeAllMenus();
            if (!isOpen) {
                menu.classList.add("open");
                menu.querySelector(".menu-btn").setAttribute("aria-expanded", "true");
            }
            return;
        }

        // clicked edit inside ellipse menu
        if (event.target.closest("#edit-project")) {
            closeAllMenus();
            const id = projectCard.dataset.id;
            const input = projEditForm.querySelector("#edited-project-title");
            projEditForm.dataset.activeProjID = id;
            input.value = getProject(id).title;
            projEditForm.showModal();
            return;
        }

        // clicked delete inside ellipse menu
        if (event.target.closest("#proj-delete")) {
            closeAllMenus();
            const id = projectCard.dataset.id;
            deleteProject(id);
            setCurrentView("inbox");
            renderProjectsMenu();
            resetCurrentView();
            return;
        }

        // click anywhere else closes ellipse menu
        closeAllMenus();
    });
}

export function closeAllMenus() {
    container.querySelectorAll(".ellipse-menu.open").forEach((menu) => {
        menu.classList.remove("open");
        menu.querySelector(".menu-btn").setAttribute("aria-expanded", "false");
    });
}

function handleProjectEdit() {
    projEditForm.addEventListener("close", () => {
        const action = projEditForm.returnValue;

        if (action === "confirm") {
            const input = projEditForm.querySelector("#edited-project-title");
            const newTitle = input.value;
            const projID = projEditForm.dataset.activeProjID;
            editProject(projID, newTitle);
            renderProjectsMenu();
            resetCurrentView();
        }
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
export function projectUIInit() {
    openAddProject();
    renderProjectsMenu();
    resetCurrentView();
    handleProjFormActions();
    handleInboxesClick();
    handleProjectClicks();
    handleProjectEdit();
    initProjectMenuEvents();

    toggleSideBar();
}
// saves projects every time a project is created/modified
export function saveProjects(projectsArr) {
    let allProjectsString = JSON.stringify(projectsArr);
    localStorage.setItem("projects", allProjectsString);
}

// save tasks every time a project is created/modified
export function saveTasks(tasksArr) {
    let allTasksString = JSON.stringify(tasksArr);
    localStorage.setItem("tasks", allTasksString);
}

// called whenever the current view is changed (save in setCurrentView)
export function saveCurrentViewId(currentView) {
    let currentViewString = JSON.stringify(currentView);
    localStorage.setItem("currentView", currentViewString);
}
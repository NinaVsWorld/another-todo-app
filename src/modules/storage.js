// function that saves projects every time a project is created
// call this createProject in projects.js
// call this in editProject
// call this in deleteProject
export function saveProjects(projectsArr) {
    let allProjectsString = JSON.stringify(projectsArr);
    localStorage.setItem("projects", allProjectsString);
}

// function that saves todos every time a todo is created
// call this in createTask in task.js
// call this in editTask
// call this in deleteTask
// check if need to call in toggleCompletion???
export function saveTasks(tasksArr) {
    let allTasksString = JSON.stringify(tasksArr);
    localStorage.setItem("tasks", allTasksString);
}

// function that saves currentViewID
// called whenever the current view is changed (save in setCurrentView)
export function saveCurrentViewId(currentView) {
    let currentViewString = JSON.stringify(currentView);
    localStorage.setItem("currentView", currentViewString);
}
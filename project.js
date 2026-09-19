import { allTasks, deleteTask } from "./task";
export const allProjects = []

class project {
    constructor(title) {
        this.title = title
        this.id = crypto.randomUUID()
    }
}

export function createProject(title) {
    const project = createProject(title);
    allProjects.push(project);
}

// editProject

export function deleteProject(id) {
    const index = allProjects.findIndex(proj => proj.id == id);
    if (index > -1) {
        // need to delete all tasks that have specific project id
        deleteAllProjTasks(id);
        allProjects.splice(index, 1);
    };
}

function deleteAllProjTasks(id) {
    const projTasks = allTasks.filter(task => task.projectID == id);
    for (const task of projTasks) {
        deleteTask(task.id);
    }
}
export const allTasks = []

class Task {
    constructor(title, description, date, priority, projID) {
        this.title = title
        this.description = description
        this.date = date
        this.priority = priority
        this.id = crypto.randomUUID()
        this.projectID = projID
        this.completed = false
    }
};

export function createTask(title, description, date, priority, projID) {
    const task = new Task(title, description, date, priority, projID);
    allTasks.push(task);
}

// completing and uncompleting task
export function toggleTaskCompletion(id) {
    const index = allTasks.findIndex(task => task.id == id);
    if (index > - 1) {
        const task = allTasks[index];
        if (!task.completed) {
            task.completed = true;
        } else {
            task.completed = false;
        }
    }
}

export function editTask(id, newTitle, newDescription, newDate, newPriority, newProjID) {
    const index = allTasks.findIndex(task => task.id == id);
    if (index > -1) {
        const task = allTasks[index];
        // if below are undefined, fall back to og values
        task.title = newTitle ?? task.title;
        task.description = newDescription ?? task.description;
        task.date = newDate ?? task.date;
        task.priority = newPriority ?? task.priority;
        task.projectID = newProjID ?? task.projectID;
    }
}

export function deleteTask(id) {
    const index = allTasks.findIndex(task => task.id == id);
    if (index > -1) {
        allTasks.splice(index, 1);
    };
}
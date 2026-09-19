export const allTasks = []

// task object
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
export function toggleCompletionState(id) {
    const index = allTasks.findIndex(task => task.id == id);
    const task = allTasks[index];
    if (index > - 1) {
        if (!task.completed) {
            task.completed = true;
        } else {
            task.completed = false;
        }
    }
}

export function editTask(id, newTitle, newDescription, newDate, newPriority, newProjID) {
    const index = allTasks.findIndex(task => task.id == id);
    const task = allTasks[index];
    // if title is blank or undefined, keep og title
    task.title = newTitle ?? task.title;
    // if description is blank or undefined, keep og description
    task.description = newDescription ?? task.description;
    // if date is blank or undefined, keep og date
    task.date = newDate ?? task.date;
    // if priority is blank or undefined, keep og priority
    task.priority = newPriority ?? task.priority;
    // same for projID
    task.projectID = newProjID ?? task.projectID;
}

export function deleteTask(id) {
    const index = allTasks.findIndex(task => task.id == id);
    if (index > -1) {
        allTasks.splice(index, 1);
    };
}
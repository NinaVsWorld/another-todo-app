export const allTasks = []

// task object
class task {
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
    const task = new task(title, description, date, priority, projID);
    allTasks.push(task);
}

export function completeTask(id) {
    const index = allTasks.findIndex(task => task.id == id);
    const task = allTasks[index];
    task.completed = true;
}

// uncomplete a task

// edit task

// delete task
export function deleteTask(id) {
    const index = allTasks.findIndex(task => task.id == id);
    if (index > -1) {
        allTasks.splice(index, 1);
    };
}
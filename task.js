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

// create task
export function createTask(title, description, date, priority, projID) {
    const task = new task(title, description, date, priority, projID);
    allTasks.push(task);
}

// set task as completed
export function completeTask(id) {
    // this returns a list ... incorrect
    const task = allTasks.filter(obj => obj.id == id);
    task.completed = true;
    // need to push back to allTasks, preserving indexing
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
const allTasks = []

// task object
class task {
    constructor(title, description, date, priority, projID) {
        this.title = title
        this.description = description
        this.date = date
        this.priority = priority
        this.id = nextID() // need to write this function
        this.projectID = projID
    }

    getTaskID() {
        this.id
    }
};

// create task
export function createTask(title, description, date, priority, projID) {
    const task = task(title, description, date, priority, projID);
    allTasks.push(task);
}

// edit task

// delete task
export function deleteTask(id) {
    const index = allTasks.findIndex(task => task.getTaskID() == id);
    if (index > -1) {
        allTasks.splice(index, 1);
    }

    // for testing
    console.log(allTasks);
}
const allTasks = []

// task object
class task {
    constructor(title, description, date, priority, projID) {
        this.title = title
        this.description = description
        this.date = date
        this.priority = priority
        this.id = getID() // need to write this function
        this.projectID = projID
    }
};

// create task

// edit task

// delete task
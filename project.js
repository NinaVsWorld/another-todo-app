const allProjects = []

class project {
    constructor(title) {
        this.title = title
        this.id = getProjID() // need to write this function
        this.tasks = []
    }

    addTask(task) {
        this.tasks.push(task);
    }
}

// create project

// editProject

// deleteProject
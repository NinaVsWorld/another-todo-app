const container = document.querySelector("html");
const taskForm = document.querySelector(".task-form");

function showTaskForm() {
    container.addEventListener("click", (event) => {
        const target = event.target.closest(".add-task");
        if (target) {
            taskForm.showModal();
        }
    });
}

function closeTaskForm() {
    container.addEventListener("click", (event) => {
        const target = event.target.closest(".cancel");
        if (target) {
            taskForm.close();
        }
    });
}
 
export function formActions() {
    showTaskForm();
    closeTaskForm();
}
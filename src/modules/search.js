import { renderTasks } from "./projectUIManager.js";
import { allTasks } from "./task.js";
import { container } from "./taskUIManager.js";

// takes a string and searches allTasks
function searchTask(searchString) {
    if (searchString === "") {
        return [];
    }

    return allTasks.filter(task => {
        return task.title.toLowerCase().includes(searchString.toLowerCase()) ||
        task.description.toLowerCase().includes(searchString.toLowerCase());
    });
}

// add a search bar to the page
function handleSearchClick() {
    container.addEventListener("click", (event) => {
        if (event.target.closest("#search")) {
            const pageTitle = document.getElementById("page-title");
            pageTitle.textContent = "Search";
            insertSearchBar();
            renderTasks([]);
        }
    });
}

// wipe the screen, add the search bar to page
function insertSearchBar() {
    const list = container.querySelector(".list-container");
    const taskList = document.getElementById("task-list");
    const searchBar = document.createElement("input");
    searchBar.type = "search";
    searchBar.id = "search-bar"
    list.insertBefore(searchBar, taskList);

    // delete addtask button
    const addTaskBtn = list.querySelector("#add-task-btn");
    if (list.contains(addTaskBtn)) {
        addTaskBtn.remove();
    }
    handleSearchTyping();
}

// handle actual searching
function handleSearchTyping() {
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", (event) => {
        let searchResults = searchTask(event.target.value);
        renderTasks(searchResults);
    });
}

// delete search bar from page when not in the search tab
export function deleteSearchBar() {
    const page = document.querySelector(".list-container");
    const searchBar = document.getElementById("search-bar");
    if (page.contains(searchBar)) {
        searchBar.remove();
    }
}

export function searchUIInit() {
    handleSearchClick();
}
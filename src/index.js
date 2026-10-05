import "./style.css";
import { init } from "./modules/projectUIManager.js";
import { taskUIInit } from "./modules/taskUIManager.js";
import { initSearch } from "./modules/search.js";

init()
taskUIInit();
initSearch();

// function that gets teh retrieved stuff from storage.js and repopulates allTasks and allProjects
// will need to make setter functions for allTasks and allProjects

// initial render on opening
// check if allProjects is empty
    // if empty, default to inbox
    // otherwise default to currentViewID

// render projects menu on opening - this can go in init
// render tasks on opening?
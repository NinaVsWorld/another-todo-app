import "./style.css";
import { init } from "./modules/projectUIManager.js";
import { taskUIInit } from "./modules/taskUIManager.js";
import { initSearch } from "./modules/search.js";

init()
taskUIInit();
initSearch();
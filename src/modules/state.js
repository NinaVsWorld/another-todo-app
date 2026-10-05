import { saveCurrentViewId } from "./storage.js";

let currentViewID = JSON.parse(localStorage.getItem("currentView")) || "inbox";

export function setCurrentView(id) {
    currentViewID = id;
    saveCurrentViewId(currentViewID);
}

export function getCurrentView() {
    return currentViewID;
}
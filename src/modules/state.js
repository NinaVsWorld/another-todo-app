import { saveCurrentViewId } from "./storage.js";

let currentViewID = "inbox";
// for now, will need to change to current project when perisiten data?

export function setCurrentView(id) {
    currentViewID = id;
    saveCurrentViewId(currentViewID);
}

export function getCurrentView() {
    return currentViewID;
}
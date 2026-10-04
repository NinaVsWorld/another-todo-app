let currentViewID = "inbox";
// for now, will need to change to current project when perisiten data?

export function setCurrentView(id) {
    currentViewID = id;
}

export function getCurrentView() {
    return currentViewID;
}
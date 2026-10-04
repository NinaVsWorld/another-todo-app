let currentViewID = "inbox";

export function setCurrentView(id) {
    currentViewID = id;
}

export function getCurrentView() {
    return currentViewID;
}
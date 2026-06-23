import list from "./list";

function board(title) {
    let boardTitle;
    let lists = [];
    const id = crypto.randomUUID;

    // Add list to board
    const addList = (text) => {
        listItem = list(text);
        lists.push(listItem);
    }

    // Delete list from board
    const deleteList = (id) => {
        lists = lists.filter(item => item.getID() !== id);
    }

    // reorder list
}
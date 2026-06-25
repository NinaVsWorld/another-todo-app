import list from "./list";

function board(title) {
    let boardTitle = title;
    let lists = [];
    const id = crypto.randomUUID();

    // Add list to board
    const addList = (text) => {
        const listItem = list(text);
        lists.push(listItem);
    }

    // Delete list from board
    const deleteList = (id) => {
        lists = lists.filter(item => item.getID() !== id);
    }

    // reorder list
    const reorderLists = (currentIndex, targetIndex) => {
        const movedItem = lists.find((item, index) => index === currentIndex);
        const remainingItems = lists.filter(item => item !== movedItem);

        const reorderedItems = [
            ...remainingItems.slice(0, targetIndex),
            movedItem,
            ...remainingItems.slice(targetIndex)
        ];

        lists = reorderedItems;
    }

    // Edit board title
    const editTitle = (newTitle) => {
        boardTitle = newTitle;
    }

    // Get board title
    const getTitle = () => boardTitle;

    // Get all lists
    const getLists = () => [...lists];

    return {addList, deleteList, reorderLists, editTitle, getTitle, getLists};
}

export default board;
import todo from "./todo";

// list should be able to reorder todos and sort functionaliaty
function list(title) {
    let listTitle = title;
    let todos = [];
    const id = crypto.randomUUID();

    // Add todos to todos list
    const addTodo = (text) => {
        const item = todo(text);
        todos.push(item);
    }

    // Delete todos from todos list
    const deleteTodo = (id) => {
        todos = todos.filter(item => item.getID() !== id);
    }

    // Get todo from todos list
    const getTodo = (id) => todos.find(item => item.getID() === id);

    // Edit title
    const editTitle = (text) => {
        listTitle = text;
    }

    // Get todos array
    const getTodos = () => [...todos];

    // Get title
    const getListTitle = () => listTitle;

    // get id
    const getID = () => id;

    // Sort todos chronologically by date (newest)
    const sortByNewest = () => {
        todos.sort((a, b) => b.getDate().localeCompare(a.getDate()));
    }

    const sortByOldest = () => {
        todos.sort((a, b) => a.getDate().localeCompare(b.getDate()));
    }

    // reorder todos
    const reorderTodos = (currentIndex, targetIndex) => {
        const movedItem = todos.find((item, index) => index === currentIndex);
        const remainingItems = todos.filter(item => item !== movedItem);

        const reorderedItems = [
            ...remainingItems.slice(0, targetIndex),
            movedItem,
            ...remainingItems.slice(targetIndex)
        ];

        todos = reorderedItems;
    }

    return {addTodo, deleteTodo, getListTitle, getTodo, getTodos, editTitle, getID, reorderTodos, sortByNewest, sortByOldest};
}

export default list;
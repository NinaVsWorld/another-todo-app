import { todo } from "./todo";

// list should be able to reorder todos and sort functionaliaty
function list(title) {
    let listTitle = title;
    let todos = [];

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
    const getTodos = () => todos;

    // Get title
    const getListTitle = () => listTitle;

    // Sort todos chronologically by date
}
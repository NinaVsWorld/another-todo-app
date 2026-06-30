import board from "./project.js";
import list from "./list.js";
import todo from "./todo.js";
import "./style.css";

// New board
const myBoard = board("My Board");

// Add lists to the board
const list1 = myBoard.addList("List 1");
const list2 = myBoard.addList("List 2");
const list3 = myBoard.addList("List 3");

// Add todos to one of the lists
const todo1 = list1.addTodo("todo 1");
const todo2 = list1.addTodo("todo 2");
const todo3 = list1.addTodo("todo 3");

// Give todo1 a description, checklist item, note
todo1.setDescription("blah blah blah");
todo1.addCheckItem("check!");
todo1.createNote("note note note");


// change List title
list1.editTitle("loser item");

// swap items
list1.reorderTodos(0, 2);

// get lists from board
const lists = myBoard.getLists();

// print the array
for (const list of lists) {
    console.log(list.getListTitle());
    console.log(list.getID());
}

//console.log(todo1.getDescription());
console.log(JSON.stringify(lists));

for (const item of list1.getTodos()) {
    console.log(item.getTitle());
}

// delete a todo
list1.deleteTodo(todo1.getID());

for (const item of list1.getTodos()) {
    console.log(item.getTitle());
}
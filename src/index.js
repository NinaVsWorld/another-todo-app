import board from "./project.js";
import list from "./list.js";
import todo from "./todo.js";

// New board
const myBoard = board("My Board");

// Add lists to the board
const list1 = myBoard.addList("List 1");
const list2 = myBoard.addList("List 2");
const list3 = myBoard.addList("List 3");

// Add todos to one of the lists
const todo1 = list1.addTodo("todo 1");
const todo2 = list1.addTodo("todo 2");

// Give todo1 a description, checklist item, note
todo1.setDescription("blah blah blah");
todo1.addCheckItem("check!");
todo1.createNote("note note note");

// get lists from board
const lists = myBoard.getLists();

// print the array
const myBoardString = JSON.stringify(lists);
console.log(myBoardString);
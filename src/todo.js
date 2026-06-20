import { checkItem } from "./behaviour";

function todo(text) {
    let title = text;
    let description;
    let dueDate;
    let todoNote;
    const checkList = [];

    // description is optional, so we have setDescription()
    const setDescription = (text) => {
        description = text;
    }

    // note is optional so create note method. Only one note
    const createNote = (text) => {
        if (todoNote === undefined) {
            todoNote = note(text);
        }
    }

    // checklist items are optional, so we have addCheckItem
    const addCheckItem = (text) => {
        checkList.push(checkItem(text));
    }

    // dueDate is probably a string. want to use date-fns library later
    // I probably also want a method to edit the title
    return {setDescription, createNote, addCheckItem};
}
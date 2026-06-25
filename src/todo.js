import { checkItem, note } from "./behaviour.js";

function todo(text) {
    let title = text;
    let description;
    let dueDate;
    const id = crypto.randomUUID();
    let checkList = [];
    let notes = [];

    // description is optional, so we have setDescription()
    const setDescription = (text) => {
        description = text;
    }

    // note is optional so create note method.
    const createNote = (text) => {
        const noteItem = note(text);
        notes.push(noteItem);
    }

    // Delete note
    const deleteNote = (id) => {
        notes = notes.filter(item => item.getID() !== id);
    }

    // Find note
    const findNote = (id) => notes.find(item => item.getID() === id);

    // checklist items are optional, so we have addCheckItem
    const addCheckItem = (text) => {
        checkList.push(checkItem(text));
    }

    // Delete check item
    const deleteCheckItem = (id) => {
        checkList = checkList.filter(item => item.getID() !== id);
    }

    // find check item 
    const findCheckItem = (id) => checkList.find(item => item.getID() === id);

    // set due date YYYY-MM-DD
    const setDueDate = (date) => {
        dueDate = date;
    }

    // edit title
    const editTitle = (text) => {
        title = text;
    }

    // get title
    const getTitle = () => title;

    // get todo ID
    const getID = () => id;

    // get date
    const getDate = () => dueDate;

    // get description
    const getDescription = () => description;

    return {setDescription, 
        createNote, 
        addCheckItem, 
        deleteCheckItem, 
        getID, 
        getDate, 
        findNote, 
        findCheckItem,
        setDueDate,
        editTitle,
        getTitle,
        deleteNote,
        getDescription
    };
}

export default todo;
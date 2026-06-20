// As I develop this functionality, decide if I can merge the common
// attributes (setText, getText) into one handleText function
function checkItem() {
    // want it to be editable so use let
    let item;
    //let hasBeenEdited = true; // help with loading text

    // deal with backspacing behaviour later
    const setText = (text) => {
        item = text;
    }

    const getText = () => {item};
    return {setText, getText};
}

function note() {
    let note;

    const setText = (text) => {
        note = text;
    }

    const getText = () => {note};
    return {setText, getText};
}

export {checkItem, note};
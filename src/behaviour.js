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
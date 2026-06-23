// As I develop this functionality, decide if I can merge the common
// attributes (setText, getText) into one handleText function
function checkItem(text) {
    // want it to be editable so use let
    let item = text;
    const id = crypto.randomUUID();
    let isChecked = false;

    // deal with backspacing behaviour later
    const editText = (text) => {
        item = text;
    }

    // change checked status
    const changeChecked = () => {
        if (isChecked) {
            isChecked = false;
        } else {
            isChecked = true;
        }
    }

    const getText = () => item;
    return {editText, getText, changeChecked};
}

function note(text) {
    let note = text;
    const id = crypto.randomUUID();

    const editText = (text) => {
        note = text;
    }

    const getText = () => note;
    return {editText, getText};
}

export {checkItem, note};
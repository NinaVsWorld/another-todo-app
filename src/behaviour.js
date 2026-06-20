function createCheckItem(text) {
    // want it to be editable so use let
    let item = text;
    //let hasBeenEdited = true; // help with loading text

    // deal with backspacing behaviour later
    const edit = (edits) => {
        item = edits;
    }

    const getText = () => {item};
    return {edit, getText};
}


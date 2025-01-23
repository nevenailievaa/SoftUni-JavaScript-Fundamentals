function rightPlace(firstString, character, secondString) {
    const result = firstString.replace('_', character);

    if (result === secondString) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
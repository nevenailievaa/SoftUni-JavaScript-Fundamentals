function lowerOrUpper(character) {
    const charValue = character.charCodeAt(0);

    if (charValue >= 65 && charValue <= 90) {
        console.log('upper-case');
    } else if (charValue >= 97 && charValue <= 122) {
        console.log('lower-case');
    }
}
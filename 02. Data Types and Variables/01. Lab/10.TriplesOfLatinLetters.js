function triplesOfLatinLetters(numberString) {
    const number = Number(numberString);

    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            for (let k = 0; k < number; k++) {
                const firstLetter = String.fromCharCode(97 + i);
                const secondLetter = String.fromCharCode(97 + j);
                const thirdLetter = String.fromCharCode(97 + k);

                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}
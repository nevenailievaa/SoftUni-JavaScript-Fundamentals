function triangleOfNumbers(n) {
    let currentRow = '';

    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            currentRow += rows + ' ';
        }
        console.log(currentRow);
        currentRow = '';
    }
}
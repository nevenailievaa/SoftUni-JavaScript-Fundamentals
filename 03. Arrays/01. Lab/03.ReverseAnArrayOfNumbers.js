function reverseAnArrayOfNumbers(n, array) {
    let newArray = [];

    for (let i = 0; i < n; i++) {
        newArray.push(array[i]);
    }

    console.log(newArray.reverse().join(' '));
}
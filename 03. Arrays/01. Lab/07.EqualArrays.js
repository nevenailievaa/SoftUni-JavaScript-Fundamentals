function equalArrays(arrayOne, arrayTwo) {
    let isIdentical = true;
    let indexDifference = 0;
    let sum = 0;

    for (let i = 0; i < arrayOne.length; i++) {
        let currentElementFirstArray = arrayOne[i];
        let currentElementSecondArray = arrayTwo[i];

        if(currentElementFirstArray !== currentElementSecondArray) {
            isIdentical = false;
            indexDifference = i;
            break;
        }

        sum += Number(currentElementFirstArray);
    }

    if (isIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexDifference} index`);
    }
}
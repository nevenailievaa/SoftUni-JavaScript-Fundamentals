function cinema(projectionType, rows, cols){

    let ticketsCount = rows * cols; 
    let income = 0;

    if(projectionType === 'Premiere'){
        income = ticketsCount * 12;
    } else if (projectionType === 'Normal'){
        income = ticketsCount * 7.5;
    } else if (projectionType === 'Discount'){
        income = ticketsCount * 5;
    }

    console.log(`${income.toFixed(2)} leva`);
}
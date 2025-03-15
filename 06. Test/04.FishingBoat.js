function fishBoat(budget, season, fishmen) {
    let price = 0;

    if (season === "Spring") {
        price = 3000;
    } else if (season === "Summer" || season === "Autumn") {
        price = 4200;
    } else if (season === "Winter") {
        price = 2600;
    }

    if (fishmen <= 6) {
        price *= 0.90;
    } else if (fishmen <= 11) {
        price *= 0.85;
    } else {
        price *= 0.75;
    }

    if (fishmen % 2 === 0 && season !== "Autumn") {
        price *= 0.95;
    }

    let diff = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
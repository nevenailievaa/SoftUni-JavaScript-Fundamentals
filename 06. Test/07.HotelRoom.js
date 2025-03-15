function hotelRoom(month, nightsCount) {
    let priceApartment = 0;
    let priceStudio = 0;

    if (month === "May" || month === "October") {
        priceApartment = 65;
        priceStudio = 50;
        if (nightsCount > 7 && nightsCount <= 14) {
            priceStudio = priceStudio * 0.95;
        } else if (nightsCount > 14) {
            priceStudio = priceStudio * 0.70;
        }
    } else if (month === "June" || month === "September") {
        priceApartment = 68.70;
        priceStudio = 75.20;
        if (nightsCount > 14) {
            priceStudio = priceStudio * 0.80;
        }
    } else if (month === "July" || month === "August") {
        priceApartment = 77;
        priceStudio = 76;
    }

    if (nightsCount > 14) {
        priceApartment = 0.90 * priceApartment;
    }

    let sumApartment = priceApartment * nightsCount;
    let sumStudio = priceStudio * nightsCount;

    console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);
}
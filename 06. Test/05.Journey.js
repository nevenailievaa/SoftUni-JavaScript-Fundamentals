function journey(budget, season) {
    let destination = "";
    let accommodation = "";
    let price = 0;

    if(budget <= 100) {
        destination = "Bulgaria";
        switch(season) {
            case "summer":
                accommodation = "Camp";
                price = budget * 0.3;
            break;
            case "winter":
                accommodation = "Hotel";
                price = budget * 0.7;
            break;
        }
    } else if(budget > 100 && budget <= 1000) {
        destination = "Balkans";
        switch(season) {
            case "summer":
                accommodation = "Camp";
                price = budget * 0.4;
            break;
            case "winter":
                accommodation = "Hotel";
                price = budget * 0.8;
            break;
        }
    } else if(budget > 1000) {
        destination = "Europe";
        accommodation = "Hotel";
        price = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${price.toFixed(2)}`);
}
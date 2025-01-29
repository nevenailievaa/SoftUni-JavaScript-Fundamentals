function convertDistance(distanceInMeters) {
    const distanceInKilometers = distanceInMeters / 1000;
    const distanceInMiles = distanceInKilometers * 0.621371;

    console.log(`${distanceInMeters} meters is equal to ${distanceInKilometers} kilometers.`);
    console.log(`${distanceInKilometers} kilometers is equal to ${distanceInMiles.toFixed(2)} miles.`);
}
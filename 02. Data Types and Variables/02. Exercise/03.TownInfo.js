function TownInfo(townName, townPopulation, townArea) {
    let isInvalid = false;

    if (townName.length < 3) {
        console.log('Town name must be at least 3 characters!');
        isInvalid = true;
    }
    if (townPopulation < 0) {
        console.log('Population must be a positive number!');
        isInvalid = true;
    }
    if (townArea < 0) {
        console.log('Area must be a positive number!');
        isInvalid = true;
    } 

    if(isInvalid == false) {
        console.log(`Town ${townName} has population of ${townPopulation} and area ${townArea} square km.`);
    }
}
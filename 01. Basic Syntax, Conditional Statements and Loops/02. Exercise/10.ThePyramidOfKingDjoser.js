function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let height = 0;

    for (let i = base; i > 0; i -= 2) {
        height++;

        if (i === 1 || i === 2) {
            gold += i * i * increment;
            break;
        }

        let outerLayer = i * i;
        let innerLayer = (i - 2) * (i - 2);
        stone += innerLayer * increment;

        if (height % 5 === 0) {
            lapis += (outerLayer - innerLayer) * increment;
        } else {
            marble += (outerLayer - innerLayer) * increment;
        }
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}
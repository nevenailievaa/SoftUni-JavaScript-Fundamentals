function gladiatorLosses(loss, helmet, sword, shield, armour) {
    helmet = Math.trunc(loss / 2) * helmet;
    sword = Math.trunc(loss / 3) * sword;
    shield = Math.trunc(loss / 6) * shield;
    armour = Math.trunc(loss / 12) * armour;
    var total = helmet + sword + shield + armour;
    return 'Gladiator expenses: ' + total.toFixed(2) + ' aureus';
}
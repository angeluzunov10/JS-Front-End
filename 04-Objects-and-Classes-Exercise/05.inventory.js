function inventory(data) {
    let registry = [];

    for (let row of data) {
        let [name, level, items] = row.split(' / ');
        level = Number(level);

        let hero = {
            name,
            level,
            items
        };

        registry.push(hero);
    }

    registry.sort(compareLevels);

    for (let hero of registry) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

    function compareLevels(a, b) {
        return a.level - b.level;
    }
}
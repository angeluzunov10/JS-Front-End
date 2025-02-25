function roadRadar(speed, area){
    let areas = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }

    let limit = areas[area];
    let speedDifference = speed - limit;
    

    if (limit < speed) {
        speedDifference = speed - limit;
        if (speedDifference <= 20) {
            status = 'speeding';
        } else if (speedDifference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving'
        }

        return `The speed is ${speedDifference} km/h faster than the allowed speed of ${limit} - ${status}`
    }

    console.log(`Driving ${speed} km/h in a ${limit} zone`)
}
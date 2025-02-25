function roadRadar(speed, area){
    let limit = 0;
    let status;
    let speedDifference = 0
    
    if (area == 'motorway') {
        limit = 130;
    } else if (area == 'interstate') {
        limit = 90;
    } else if (area == 'city') {
        limit = 50;
    } else if (area == 'residential') {
        limit = 20;
    }

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
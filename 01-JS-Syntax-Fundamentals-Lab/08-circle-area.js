function area(value){
    let area;

    if (typeof(value) == 'number') {
        area = Math.PI * (value ** 2);
        return area.toFixed(2);
    }

    console.log(`We can not calculate the circle area, because we receive a ${typeof(value)}.`)
}
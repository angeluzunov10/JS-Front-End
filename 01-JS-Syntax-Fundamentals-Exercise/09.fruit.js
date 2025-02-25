function moneyNeeded(fruit, weight, price) {
    let weightInKilos = weight / 1000
    let money = weightInKilos * price;

    console.log(`I need $${money.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruit}.`)
}

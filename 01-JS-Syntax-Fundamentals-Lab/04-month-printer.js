function monthPrinter(number) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    if (number < 1 || number > 12) {
        console.log('Error!')
    } else {
        console.log(months[number - 1])
    }
}

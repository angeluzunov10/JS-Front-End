function vacation(groupCount, groupType, day) {
    let initialPrice;
    let totalPrice;

    if (groupType == 'Students') {
        if (day == 'Friday') {
            initialPrice = 8.45;
        } else if (day == 'Saturday') {
            initialPrice = 9.80;
        } else if (day == 'Sunday') {
            initialPrice = 10.46;
        }
    } else if (groupType == 'Business') {
        if (day == 'Friday') {
            initialPrice = 10.90;
        } else if (day == 'Saturday') {
            initialPrice = 15.60;
        } else if (day == 'Sunday') {
            initialPrice = 16;
        }   
    } else if (groupType == 'Regular') {
        if (day == 'Friday') {
            initialPrice = 15;
        } else if (day == 'Saturday') {
            initialPrice = 20;
        } else if (day == 'Sunday') {
            initialPrice = 22.50;
        }
    }

    totalPrice = groupCount * initialPrice;
    
    if (groupType == 'Students' && groupCount >= 30) {
        totalPrice -= 0.15 * totalPrice;
    } else if (groupType == 'Business' && groupCount >= 100) {
        totalPrice -= 10 * initialPrice;
    } else if (groupType == 'Regular' && (groupCount >= 10 && groupCount <= 20)) {
        totalPrice -= 0.05 * totalPrice;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)   
}
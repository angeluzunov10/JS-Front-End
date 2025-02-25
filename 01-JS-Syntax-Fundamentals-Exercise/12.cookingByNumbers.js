function cook(num, op1, op2, op3, op4, op5) {
    num = Number(num);
    let result = num;
    let operations = [op1, op2, op3, op4, op5];

    for (let operation of operations) {
        if (operation == 'chop') {
            result /= 2;
            console.log(result)
            continue;
        } else if (operation == 'dice'){
            result = Math.sqrt(result);
            console.log(result)
            continue;
        } else if (operation == 'spice'){
            result += 1;
            console.log(result)
            continue;
        } else if (operation == 'bake'){
            result *= 3;
            console.log(result)
            continue;
        } else if (operation == 'fillet'){
            result -= 0.2 * result;
            console.log(result)
            continue;
        }
        
    }
}
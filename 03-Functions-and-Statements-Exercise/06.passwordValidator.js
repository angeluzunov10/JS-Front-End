function passwordCheck(password) {
    let errors = [];

    let lengthRegex = /^.{6,10}$/;
    
    let charRegex = /^[A-Za-z\d]+$/;
    
    let digitRegex = /(.*\d.*\d)/;

    if (lengthRegex.test(password) == false){
        errors.push('Password must be between 6 and 10 characters');
    }

    if (charRegex.test(password) == false){
        errors.push('Password must consist only of letters and digits');
    }

    if (digitRegex.test(password) == false){
        errors.push('Password must have at least 2 digits');
    }

    if (errors.length){
        console.log(errors.join('\n'))
    } else {
        console.log('Password is valid')
    }

}

passwordCheck('MyPass123')
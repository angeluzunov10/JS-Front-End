function ages(age) {
    let personCategory;
    if (age >= 0) {
        if (age <= 2) {
            personCategory = 'baby'
        } else if (age <=13) {
            personCategory = 'child'
        } else if (age <=19) {
            personCategory = 'teenager'
        } else if (age <=65) {
            personCategory = 'adult'
        } else {
            personCategory = 'elder'
        }

        return personCategory
    } else {
        console.log('out of bounds')
    }
}

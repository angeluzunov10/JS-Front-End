function solve(age) {
    let personCategory;

    if (0 <= age && age <= 2) {
        personCategory = 'baby'
    } else if (3 <= age && age <=13) {
        personCategory = 'child'
    } else if (14 <= age && age <=19) {
        personCategory = 'teenager'
    } else if (20 <= age && age <=65) {
        personCategory = 'adult'
    } else if (age >= 66) {
        personCategory = 'elder'
    } else {
        return console.log('out of bounds')
    }

    console.log(`${personCategory}`)
}

solve(-10)
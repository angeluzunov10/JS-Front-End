function grades(grade){
    if (grade < 3.00){
        console.log(`Fail (${grade.toFixed(0)})`)
    } else if (3.00 <= grade && grade < 3.50){
        console.log(`Poor (${grade.toFixed(2)})`)
    } else if (3.50 <= grade && grade < 4.50){
        console.log(`Good (${grade.toFixed(2)})`)
    } else if (4.50 <= grade && grade < 5.50){
        console.log(`Very good (${grade.toFixed(2)})`)
    } else if (grade >= 5.50){
        console.log(`Excellent (${grade.toFixed(2)})`)
    }
}
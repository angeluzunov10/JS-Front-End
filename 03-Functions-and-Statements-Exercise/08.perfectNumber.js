function solve(num){
    let divisors = [1];

    for (let i = 2; i < num; i++){
        if (num % i == 0){
            divisors.push(i)
        }
    }

    let sum = 0;

    for (let n of divisors){
        sum += n;
    }

    if (sum == num) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.')
    }
}
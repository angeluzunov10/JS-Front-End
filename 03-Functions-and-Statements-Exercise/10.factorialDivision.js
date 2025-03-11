function solve(p, q){
    let result = 1;

    if (p > q) {
        for (let n = p; n > q; n--) {
            result *= n;
        }
    } else {
        for (let n = q; n > p; n--) {
            result /= n;
        }
    }
    
    console.log(result.toFixed(2))
}

solve(5, 2);
solve(6, 2);
solve(3, 4);

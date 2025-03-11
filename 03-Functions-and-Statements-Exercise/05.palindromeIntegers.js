function arePalindromes(numbers) {
    for (let num of numbers) {
        let numAsString = num.toString(); 
        let isPalindrome = true;

        for (let i = 0; i < (numAsString.length - 1) / 2; i++) {
            if (numAsString[i] != numAsString[numAsString.length - i - 1]) {
                isPalindrome = false;
                break;
            }
            
        }
        

        console.log(isPalindrome);
    }
}
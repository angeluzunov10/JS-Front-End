function findSmallest(firstNum, secondNum, thirdNum) {
    let numbersArr = [firstNum, secondNum, thirdNum];
    let smallestNum = firstNum;
    for (let num of numbersArr) {
        if (num < smallestNum) {
            smallestNum = num;
        }
    }

    console.log(smallestNum);

}



// function findSmallest(firstNum, secondNum, thirdNum) {
//     console.log(Math.min(firstNum, secondNum, thirdNum));
// }
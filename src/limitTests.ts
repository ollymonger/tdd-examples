export const limitAdd = (firstNumber: number, secondNumber: number, limit: number) => {
    var result = firstNumber + secondNumber;
    if (result >= limit) {
        return result;
    } else {
        return limit;
    }
}

export const limitAdd = (firstValue: number, secondValue: number, limit: number) => {
    const result = firstValue + secondValue;

    if (result <= limit) {
        return result;
    }
    else {
        return limit;
    }
}

export const average = (inputs: number[]) => {
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
        sum += inputs[i];
    }
    let result = sum / inputs.length;
    return result;
}

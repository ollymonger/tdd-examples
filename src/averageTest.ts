export const average = (inputs: any) => {
    var sum = 0;
    for (var i = 0; i < inputs.length; i++) {
        sum += inputs[i];   
    }
    var result = sum / inputs.length;
    return result;
}

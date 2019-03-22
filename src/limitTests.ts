export const limitAdd = (firstNumber: number, secondNumber: number, limit: number) => {
    var result = firstNumber + secondNumber;
    if(result <= limit){
        return result;
    }
    else{
        return "lower than " + limit;
    }
}

export const limitGreaterThan = (firstNumber: number, secondNumber: number, limit: number) => {
    var result = firstNumber + secondNumber;
    if(result >= limit){
        return result;
    }
    else{
        return "greater than " + limit;
    }
}

export const limitSub = (firstNumber: number, secondNumber: number, limit: number) => {
    var result = firstNumber - secondNumber;
    if(result <= limit){
        return result;
    }
    else{
        return "lower than " + limit;
    }
}


export const limitDiv = (firstNumber: number, secondNumber: number, limit: number) => {
    var result = firstNumber / secondNumber;
    if(result >= limit){
        return result;
    }
    else{
        return "greater than " + limit;
    }
}


export const limitMulti = (firstNumber: number, secondNumber: number, limit: number) => {
    var result = firstNumber * secondNumber;
    if(result <= limit){
        return result;
    }
    else{
        return "greater than " + limit;
    }
}
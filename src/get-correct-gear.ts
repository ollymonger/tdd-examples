export const getCorrectGear = (speed: number) => {
    if (speed === 0) {
        return 0;
    }
    if (speed <= 25) {
        return 1;
    }
    if (speed >= 25 && speed <= 35) {
        return 2;
    }
    if (speed >= 35 && speed <= 50) {
        return 3;
    }
    if (speed >= 50 && speed <= 65) {
        return 4;
    }
    return 5;
}

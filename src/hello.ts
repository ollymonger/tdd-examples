export const hello = (name?: string) => {
    if (name == undefined) {
        return "Hello, world!";
    }
    return "Hello, Oliver!";
};
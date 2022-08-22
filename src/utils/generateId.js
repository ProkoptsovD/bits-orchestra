export const generateId = (length = 5, max = 9) => {
    let id = '';

    for(let i = 0; i < length; i += 1) {
        id += getRandomNumber(max);
    }

    return +id;
};

function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}
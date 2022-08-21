export const generateISBN = (length = 13, max = 9) => {
    let ISBN = '';

    for(let i = 0; i < length; i += 1) {
        ISBN += getRandomNumber(max);
    }

    return +ISBN;
};

function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}
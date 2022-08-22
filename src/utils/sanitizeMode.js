import { regexp } from "constants"

export const sanitaizeMode = (str) => {
    if(typeof str !== 'string' || !str) {
        throw new Error('Stirng must be passed');
    }

    const matched = str.match(regexp).join``.split``;
    const truncatedPreDash = matched.slice(1);
    const lastIndexOfDash = matched.lastIndexOf('/');
    
    return truncatedPreDash.slice(0, lastIndexOfDash - 1).join``;
}
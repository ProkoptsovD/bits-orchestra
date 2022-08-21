import { regexp } from "constants"

export const sanitaizeMode = (str) => {
    if(typeof str !== 'string' || !str) {
        throw new Error('Stirng must be passed');
    }

    const matched = str.match(regexp).join``.split``;
    const truncatedPreDash = matched.slice(1);
    
    return truncatedPreDash.slice(0, truncatedPreDash.length - 1).join``;
}
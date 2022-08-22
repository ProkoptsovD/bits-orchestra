import { generateId } from "./generateId";

export const prepareToast = (status, warnText) => {
    if(!status && warnText) {
        return {
            warnText,
            id: generateId()
        }
    }
    
    return {
        [status]: true,
        id: generateId()
    }
}
import { regexpNumberLength } from "constants/regexp"

export const validateISBN = (value) => regexpNumberLength.test(value);
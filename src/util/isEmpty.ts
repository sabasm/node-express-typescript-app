import { isNil } from "./isNIL";

export const isEmpty = (value: any) => {
    if (isNil(value)) {
        return true;
    }

    if (typeof value === 'string') {
        return isEmptyString(value);
    }

    if (typeof value === 'object') {
        if (value instanceof Array) {
            return isEmptyArray(value);
        }
        if (value instanceof Object) {
            return isEmptyObject(value);
        }
    }

    return false;
}

const isEmptyString = (value: string) => value.trim().length === 0;
const isEmptyArray = (value: Array<any>) => value.length === 0;
const isEmptyObject = (value: object) => Object.keys(value).length === 0;
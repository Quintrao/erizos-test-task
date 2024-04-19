export function myParseInt(str: string): number {
    let result = 0;
    let isNegative = false;

    if (str[0] === '-') {
        isNegative = true;
        str = str.substring(1);
    }

    for (let i = 0; i < str.length; i++) {
        const digit = str.charCodeAt(i) - 48;
        if (digit >= 0 && digit <= 9) {
            result = result * 10 + digit;
        } else {
            break;
        }
    }

    return isNegative ? -result : result;
}

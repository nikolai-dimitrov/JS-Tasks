// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

const convert = (n) => {
    const digitsArr = n.toString().split("").map((el) => Number(el)).reverse();

    return digitsArr;
}

convert(35231)
convert(0)

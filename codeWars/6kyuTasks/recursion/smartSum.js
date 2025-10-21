// Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.
const smartSum = (...args) => {
    let result = 0;

    for (const currentArg of args) {
        if(Array.isArray(currentArg)) {
            result += smartSum(...currentArg)
        }else {
            result += currentArg
        }

    }

    return result
};

console.log(smartSum(1, 2));
console.log(smartSum([1, 2], 3));
console.log(smartSum(1, 2, 3, [4, 5], 6));
console.log(smartSum(1, 2, [[3, 4], 5], 6));

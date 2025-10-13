const removeStrings = (arr) => {
    return arr.filter((el) => typeof el !== 'string')
};

console.log(typeof 'a')

console.log(removeStrings([1, 2, "a", "b"]));

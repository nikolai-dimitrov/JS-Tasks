const filterObject = (obj, minValue) => {
    return Object.fromEntries(Object.entries(obj).filter((el) => el[1] >= minValue))
};

console.log(filterObject({ a: 1, b: 5, c: 3 }, 3));

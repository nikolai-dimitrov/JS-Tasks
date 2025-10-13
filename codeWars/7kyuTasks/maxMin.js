const getMaxMin = (str) => {
    return `${Math.max(...str.split(" "))} ${Math.min(...str.split(" "))}`
}

console.log(getMaxMin("1 2 3 4 5"))
console.log(getMaxMin("1 2 -3 4 5"))
console.log(getMaxMin("1 9 3 4 -5"))


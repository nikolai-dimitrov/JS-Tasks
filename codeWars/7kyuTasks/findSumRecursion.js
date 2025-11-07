const findSum = (n) => {
    if( n == 1) {
        return 1
    }

    return n + findSum(n - 1)
}

console.log(findSum(3))

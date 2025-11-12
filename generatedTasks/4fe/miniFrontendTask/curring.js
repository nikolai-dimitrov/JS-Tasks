const curry = (fn) => {
    const argsLen = fn.length
	return function curried (...args)  {
        if(argsLen > args.length) {
            return function(...moreArgs) {
                return curried(...args,...moreArgs)
            }
        }else {
            return fn(...args)
        }
	};

};

// const add = (a, b) => {
// 	return a + b;
// };

const multiply = (a, b, c) => {
	return a * b * c;
};

const curriedMul = curry(multiply);

console.log(curriedMul(3)(4)(5))

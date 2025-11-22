const add = (a, b, c) => {
	return a + b + c;
};

const curry = (fn) => {
	return function curried(...args) {
		if (args.length < fn.length) {
			return function (...newArgs) {
				return curried(...args, ...newArgs);
			};
		} else {
			return fn(...args);
		}
	};
};

const curriedAdd = curry(add);

console.log(curriedAdd(1, 2, 3));
console.log(curriedAdd(1, 2)(3));
console.log(curriedAdd(1)(2)(3));

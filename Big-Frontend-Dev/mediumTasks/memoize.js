const func = (arg1, arg2) => {
	return arg1 + arg2;
};

const memo = (func) => {
	let arg1 = null;
	let arg2 = null;
	let lastResult = null;

	return function (...args) {
		let [currentArg1, currentArg2] = args;
		if (currentArg1 == arg1 && currentArg2 == arg2) {
			console.log("Same Args");
		} else {
			[arg1, arg2] = args;
            lastResult = func.apply(this, args);
			console.log("Different Args");
		}

		console.log(lastResult);
	};
};

const memoed = memo(func);

memoed(1, 2);
// 3, func is called
memoed(1, 2);
// 3 is returned right away without calling func
memoed(1, 3);
// 4, new arguments, so func is called
// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying:
// Your function takes an integer (prod) and returns an array
// if F(n) * F(n+1) = prod return true, else return false
const productFib = (prod) => {
	let isFound = null;
	let result = [];
	const cache = {};

	const fib = (n) => {
		if (n <= 1) {
			return n;
		}

		if (cache[n]) {
			return cache[n];
		} else [(cache[n] = fib(n - 1) + fib(n - 2))];
		return fib(n - 1) + fib(n - 2);
	};

	for (let i = 0; i < prod; i++) {
		const firstNum = fib(i);
		const secondNum = fib(i + 1);

		if (firstNum * secondNum == prod) {
			isFound = true;
		} else if (firstNum * secondNum > prod) {
			isFound = false;
		}

		if (isFound != null) {
			result.push(firstNum, secondNum, isFound);
			break;
		}
	}

	return result;
};

productFib(714);
productFib(800);

productFib(4895);
productFib(5895);

productFib(193864606)
productFib(944284794478904)

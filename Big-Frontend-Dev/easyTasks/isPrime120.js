const isPrime = (num) => {
	const dividers = [];

	if (num <= 1) {
		return false;
	}

	for (let i = 1; i <= num; i++) {
		if (num % i == 0) {
			dividers.push(i);
		}
	}

	if (dividers.length == 2) {
		return true;
	} else {
		return false;
	}
};

isPrime(1);
isPrime(5);
isPrime(30);
isPrime(31);
isPrime(100);

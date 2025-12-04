// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
const queueTime = (customers, n) => {
	if (n == 1) {
		return customers.reduce(
			(val, currentValue) => (val += currentValue),
			0
		);
	}

	if (n >= customers.length) {
		return Math.max(...customers);
	}

	const cashiers = Array(n).fill(0);

	customers.forEach((customer) => {
		let cashierIndex = cashiers.indexOf(Math.min(...cashiers));
		cashiers[cashierIndex] += customer;
	});

	return Math.max(...cashiers);
};

console.log(queueTime([5, 3, 4], 1));
console.log(queueTime([10, 2, 3, 3], 2));
console.log(queueTime([2, 3, 10], 2));
console.log(queueTime([2, 3, 10], 100));

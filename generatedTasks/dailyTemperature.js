const getDailyTemps = (arr) => {
	const stack = [];
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		const currentTemp = arr[i];
		while (stack.length > 0 && currentTemp > arr[stack[stack.length - 1]]) {
			const topStackIndex = stack.pop();
			result.push(i - topStackIndex);
		}

		stack.push(i);
	}

	stack.forEach((el) => result.push(0));
	console.log(result);
};

getDailyTemps([73, 74, 75, 71, 69, 72, 76, 73]);
getDailyTemps([30, 60, 90]);

getDailyTemps([30, 40, 50, 60]);
getDailyTemps([73, 72, 75]);

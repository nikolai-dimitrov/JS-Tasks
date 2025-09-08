const recentRequestCounter = (requestsArr, timeWindow) => {
	const queque = [];
	const result = [];
	for (let i = 0; i < requestsArr.length; i++) {
		const currentRequest = requestsArr[i];

		queque.push(currentRequest);
		while (currentRequest > timeWindow + queque[0]) {
			queque.shift();
		}

		if (currentRequest <= timeWindow + queque[0]) {
			result.push(queque.length);
		}
	}

	console.log(result);
};

recentRequestCounter([1, 100, 3001, 3002], 3000); // expected output = [1, 2, 3, 3]

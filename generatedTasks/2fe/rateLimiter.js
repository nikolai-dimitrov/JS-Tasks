const rateLimit = (callback, maximumCalls, periodOfTime) => {
	let timesCalled = 0;
	let startTime = Date.now();

	return function limited() {
		const currentTime = Date.now();

		if (startTime + periodOfTime >= currentTime) {
			if (timesCalled < maximumCalls) {
				timesCalled += 1;
				callback();
			}
		} else {
			timesCalled = 0;
			startTime = Date.now();
			limited();
		}
	};
};

const limited = rateLimit(() => console.log("clicked"), 2, 5000);

limited();
limited();
limited();

setTimeout(() => limited(), 7000);
setTimeout(() => limited(), 7001);
setTimeout(() => limited(), 7002);

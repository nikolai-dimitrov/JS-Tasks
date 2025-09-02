const count = (() => {
    console.log('asd')
	let timesCalled = 0;
	// console.log(timesCalled);

	const func = () => {
		timesCalled += 1;
		console.log(timesCalled);
		return timesCalled;
	};

	func.reset = () => {
		timesCalled = 0;
	};

	return func;
})();

count();
count();
count();

count.reset();
count();

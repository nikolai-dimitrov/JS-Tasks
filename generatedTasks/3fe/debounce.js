const debounce = (fn, wait) => {
	let timeoutId = null;

	const invokeCb = () => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(() => fn(), wait);
	};

	invokeCb();

	return invokeCb;
};

const logFn = () => {
    console.log('log')
};

const debouncer = debounce(logFn, 3000);
debouncer();
debouncer();
debouncer();
debouncer();

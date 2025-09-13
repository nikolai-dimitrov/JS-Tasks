const inputElement = document.querySelector("input");

const debouncedFn = (fn, delay) => {
	let timeoutId = null;
	return function () {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(() => {
			fn(inputElement.value);
		}, delay);
	};
};

const search = (name) => {
	console.log(`Search Simulation - searching user with name: ${name}`);
};

const debouncedInputFn = debouncedFn(search, 300);

inputElement.addEventListener("input", debouncedInputFn);

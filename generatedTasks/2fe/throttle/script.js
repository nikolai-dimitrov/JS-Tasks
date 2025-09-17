const body = document.querySelector("body");
body.style.height = "20000px";

const throttle = (callback, delay) => {
	let lastCalledTime = 0;
	return function fn(...args) {
		const currentTime = Date.now();

		if (currentTime - lastCalledTime >= delay) {
			lastCalledTime = currentTime;
			callback(...args);
		}
	};
};

const throttled = throttle(() => console.log("scroll"), 1000);

window.addEventListener("scroll", throttled);

// const throttle = (callback, delay) => {
// 	let timesCalled = 0;
// 	let startTime = Date.now();

// 	return function fn(...args) {
// 		const currentTime = Date.now();

// 		if (startTime + delay >= currentTime) {
// 			if (timesCalled < 1) {
// 				timesCalled += 1;
// 				callback(...args);
// 			}
// 		} else {
// 			timesCalled = 0;
// 			startTime = Date.now();
// 			fn(...args);
// 		}
// 	};
// };

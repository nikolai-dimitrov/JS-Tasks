const countSpan = document.querySelector("span");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

const counter = () => {
	let count = 0;

	return {
		increaseCount() {
			count++;
			return count;
		},

		decreaseCount() {
			count--;
			return count;
		},
	};
};

const c = counter();

increaseBtn.addEventListener("click", () => {
	countSpan.textContent = c.increaseCount();
});

decreaseBtn.addEventListener("click", () => {
	countSpan.textContent = c.decreaseCount();
});

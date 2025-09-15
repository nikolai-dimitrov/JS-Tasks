const ulElement = document.querySelector("ul");
const elements = [
	"Item 1",
	"Item 2",
	"Item 3",
	"Item 4",
	"Item 5",
	"Item 6",
	"Item 7",
];

elements.forEach((el) => {
	const liElement = document.createElement("li");
	liElement.textContent = el;
	ulElement.appendChild(liElement);
});

const logTextClickHandler = (event) => {
	if (event.target.tagName == "LI") {
		console.log(event.target.textContent);
	}
};

ulElement.addEventListener("click", logTextClickHandler);

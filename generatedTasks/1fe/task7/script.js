const toggleBtn = document.querySelector("button");

const activeClassToggleHandler = () => {
	const liElements = document.querySelector("ul").children;

	Array.from(liElements).forEach((liElement) => {
		liElement.classList.toggle('active')
	});
};

toggleBtn.addEventListener("click", activeClassToggleHandler);

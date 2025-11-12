import { data } from "./data.js";
let dataCopy = [...data];

const contentContainer = document.querySelector("body > div");
const sortBtnsContainer = document.getElementById("sort");
const cardSection = document.querySelector("section");

const filterCategoryHandler = (e) => {
	dataCopy = data.filter((el) =>
		e.target.textContent == "All" ? el : el.category == e.target.textContent
	);

	displayCards(dataCopy);
};
const createCategories = () => {
	const categories = ["All"];

	const getCategory = (el) => {
		if (categories.indexOf(el.category) == -1) {
			categories.push(el.category);
		}
	};

	const displayCategories = () => {
		const buttonsContainer = document.querySelector("#filter > div");

		categories.forEach((el) => {
			const button = document.createElement("button");
			button.textContent = el;
			button.addEventListener("click", filterCategoryHandler);
			buttonsContainer.appendChild(button);
		});
	};

	return [displayCategories, getCategory];
};

const displayCards = (data = dataCopy, initialLoad = false) => {
	if (data.length == 0) {
		const noDataHeader = document.createElement("h1");
		noDataHeader.textContent = "There aren't tasks yet.";
		contentContainer.replaceWith(noDataHeader);
		return;
	}

	const [displayCategories, getCategory] = createCategories();
	cardSection.innerHTML = "";

	data.forEach((el) => {
		getCategory(el);

		const card = document.createElement("article");

		const title = document.createElement("h3");
		title.textContent = el.title;

		const category = document.createElement("span");
		category.textContent = el.category;

		const description = document.createElement("p");
		description.textContent = el.description;

		card.appendChild(title);
		card.appendChild(category);
		card.appendChild(description);

		cardSection.appendChild(card);
	});
	if (initialLoad) {
		displayCategories();
	}
};

const sortBtnsHandler = (e) => {
	const map = {
		"A-Z": (a, b) => a.title.localeCompare(b.title),
		"Z-A": (a, b) => b.title.localeCompare(a.title),
	};

	if (e.target.tagName == "BUTTON") {
		let btnContent = e.target.textContent;
		dataCopy = dataCopy.sort((a, b) => map[btnContent](a, b));
		displayCards(dataCopy);
	}
};

sortBtnsContainer.addEventListener("click", sortBtnsHandler);
displayCards(dataCopy, true);

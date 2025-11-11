import { d } from "./data.js";

let dataCopy = [...d];
let currentPage = 1;

const searchInput = document.getElementById("search");
const tHead = document.querySelector("thead");
const tBody = document.querySelector("tbody");
const btnsContainer = document.querySelector("div");
const pageSpan = document.querySelector("div > span");

const hideBtns = () => {
	dataCopy.length <= 5
		? (btnsContainer.style.display = "none")
		: (btnsContainer.style.display = "block");
};

const displayData = (data, startIndex = 0, endIndex = 5) => {
	tBody.innerHTML = "";

	data.slice(startIndex, endIndex).forEach((el) => {
		const tr = document.createElement("tr");
		for (const key in el) {
			const td = document.createElement("td");
			td.textContent = el[key];
			tr.appendChild(td);
		}
		tBody.appendChild(tr);
	});

	pageSpan.textContent = `Page: ${currentPage} / ${Math.ceil(
		dataCopy.length / 5
	)}`;
};

const headerSortHandler = () => {
	let ascending = true;
	const sortData = (e) => {
		ascending ? (ascending = false) : (ascending = true);
		const sortBy = e.target.textContent.toLowerCase();

		if (e.target.textContent == "Id") {
			dataCopy.sort((a, b) =>
				ascending ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
			);
		} else {
			dataCopy.sort((a, b) =>
				ascending
					? a[sortBy].localeCompare(b[sortBy])
					: b[sortBy].localeCompare(a[sortBy])
			);
		}

		currentPage = 1;
		displayData(dataCopy);
	};

	return sortData;
};

const searchInputHandler = (e) => {
	const searchWord = e.target.value;

	dataCopy = d.filter(
		(el) => el.name.includes(searchWord) || el.email.includes(searchWord)
	);

	currentPage = 1;
	hideBtns();
	displayData(dataCopy);
};

const setPagination = () => {
	let startIndex = 0;
	let endIndex = 5;

	const paginationHandler = (e) => {
		if (e.target.tagName == "BUTTON") {
			if (e.target.textContent == "Prev" && currentPage != 1) {
				startIndex -= 5;
				endIndex -= 5;
				currentPage -= 1;
			} else if (
				e.target.textContent == "Next" &&
				currentPage < Math.ceil(dataCopy.length / 5)
			) {
				startIndex = currentPage * 5;
				endIndex = startIndex + 5;
				currentPage += 1;
			}
		}

		pageSpan.textContent = `Page: ${currentPage} / ${Math.ceil(
			dataCopy.length / 5
		)}`;
		displayData(dataCopy, startIndex, endIndex);
	};

	return paginationHandler;
};

searchInput.addEventListener("input", searchInputHandler);
tHead.addEventListener("click", headerSortHandler());
btnsContainer.addEventListener("click", setPagination());

displayData(dataCopy);

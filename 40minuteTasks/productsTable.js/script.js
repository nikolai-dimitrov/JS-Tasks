let data = [];
let filterBy = "All";
let sortBy = "name";
let searchQuery = "";

const tBodyElement = document.querySelector("tbody");
const sortSelectElement = document.getElementById("sortBy");
const filterSelectElement = document.getElementById("filter");
const searchInputElement = document.querySelector("input");

const sortData = (sortBy, data) => {
	let sortedData = [];
	if (sortBy == "name") {
		sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
	} else {
		sortedData = data.sort((a, b) => {
			if (sortBy == "asc") {
				return a.price - b.price;
			} else {
				return b.price - a.price;
			}
		});
	}

	return sortedData;
};

const filterData = () => {
	filterBy = filterBy[0].toUpperCase() + filterBy.slice(1, filterBy.length);

	if (filterBy == "All") {
		return data;
	}

	const filteredData = data.filter((el) => el.category == filterBy);

	return filteredData;
};

const processData = (data) => {
	let result = data;
	result = filterData();

	if (searchQuery != "") {
		console.log("asd");
		result = result.filter((el) =>
			el.name.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}

	result = sortData(sortBy, result);

	return result;
};

const getData = async () => {
	try {
		const response = await fetch("./data.json");
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
	}
};

const createProduct = (product) => {
	const trElement = document.createElement("tr");
	Object.keys(product).forEach((key) => {
		if (key != "id") {
			const tdElement = document.createElement("td");
			tdElement.textContent = product[key];

			trElement.appendChild(tdElement);
		}
	});

	return trElement;
};

const renderProducts = (data) => {
	const result = processData(data);
	tBodyElement.innerHTML = "";

	result.forEach((product) => {
		const productElement = createProduct(product);
		tBodyElement.appendChild(productElement);
	});
};

const startApp = async (data) => {
	const result = await getData();
	data.push(...result?.products);

	renderProducts(data);
};
const sortSelectChangeHandler = (e) => {
	sortBy = e.target.value;
	renderProducts(data);
};

const filterSelectChangeHandler = (e) => {
	filterBy = e.target.value;
	renderProducts(data);
};

const searchInputKeyupHandler = (e) => {
	searchQuery = e.target.value;
	renderProducts(data);
};

sortSelectElement.addEventListener("change", sortSelectChangeHandler);
filterSelectElement.addEventListener("change", filterSelectChangeHandler);
searchInputElement.addEventListener("keyup", searchInputKeyupHandler);
startApp(data);

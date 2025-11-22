let data = [];
const tBodyElement = document.querySelector("tbody");
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
	data.forEach((product) => {
		const productElement = createProduct(product);
		tBodyElement.appendChild(productElement);
	});
};

const startApp = async (data) => {
	const result = await getData();
	data.push(...result?.products);

	renderProducts(data);
};

startApp(data);

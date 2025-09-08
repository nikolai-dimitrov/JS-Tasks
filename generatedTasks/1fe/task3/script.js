const products = [
	{ id: 1, name: "Shirts", price: 20 },
	{ id: 2, name: "Pants", price: 35 },
	{ id: 3, name: "Shoes", price: 50 },
];

const productsSection = document.getElementById("products");

const table = document.createElement("table");
const tableHeadElement = document.createElement("tr");

for (const key in products[0]) {
	const thElement = document.createElement("th");
	thElement.textContent = key;
	tableHeadElement.appendChild(thElement);
}

table.appendChild(tableHeadElement);

for (const product of products) {
	const trElement = document.createElement("tr");

	for (const key in product) {
		const thElement = document.createElement("th");
		thElement.textContent = `${product[key]}`;
		trElement.appendChild(thElement);
	}

	table.appendChild(trElement);
}

productsSection.appendChild(table);

const sortProducts = (products, sortConfig) => {
	return [...products].sort((a, b) => {
		if (sortConfig["inStockFirst"] == true) {
			const stockResult = (b.stock > 0) - (a.stock > 0);
			if (stockResult != 0) {
				return stockResult;
			}
		}
		const currentKey = sortConfig["key"];
		let currentDirection = sortConfig["direction"];
		let keyResult = null;

		if (typeof a[currentKey] == "string") {
			keyResult = a[currentKey].toLocaleCompare(b[currentKey]);
		} else {
			keyResult = a[currentKey] - b[currentKey];
		}

		if (currentDirection == "desc") {
			keyResult = -keyResult;
		}

		if (keyResult != 0) {
			return keyResult;
		}
	});
};

const products = [
	{
		id: 1,
		name: "Laptop",
		category: "Electronics",
		price: 2000,
		rating: 4.7,
		stock: 3,
	},
	{
		id: 2,
		name: "Phone",
		category: "Electronics",
		price: 1200,
		rating: 4.9,
		stock: 0,
	},
	{
		id: 3,
		name: "Desk",
		category: "Furniture",
		price: 500,
		rating: 4.2,
		stock: 10,
	},
	{
		id: 4,
		name: "Chair",
		category: "Furniture",
		price: 150,
		rating: 4.2,
		stock: 0,
	},
];

const sortConfig = {
	key: "price",
	direction: "desc",
	inStockFirst: true,
};
console.log(sortProducts(products, sortConfig));
console.log(sortConfig["key"]);

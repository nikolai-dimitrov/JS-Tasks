const sortOrders = (orders) => {
	return [...orders].sort((a, b) => {
		const vipResult = b.customer.vip - a.customer.vip;

		if (vipResult != 0) {
			return vipResult;
		}

		const orderPriceResult =
			getTotalPrice(b.items) - getTotalPrice(a.items);

		if (orderPriceResult != 0) {
			return orderPriceResult;
		}

		const dateResult = new Date(b.createdAt) - new Date(a.createdAt);
		if (dateResult != 0) {
			return dateResult;
		}

		const customerNameResult = a.customer.name.toLocaleCompare(
			b.customer.name
		);
		if (customerNameResult != 0) {
			return customerNameResult;
		}

		return 0;
	});
};

const getTotalPrice = (items) => {
	return items.reduce(
		(prev, curr) => (prev += curr.price * curr.quantity),
		0
	);
};

const orders = [
	{
		id: "o1",
		customer: {
			name: "Ivan",
			vip: true,
		},
		createdAt: "2024-01-10",
		items: [
			{ name: "Laptop", price: 2000, quantity: 1 },
			{ name: "Mouse", price: 50, quantity: 2 },
		],
	},
	{
		id: "o2",
		customer: {
			name: "Maria",
			vip: false,
		},
		createdAt: "2024-01-05",
		items: [{ name: "Keyboard", price: 100, quantity: 1 }],
	},
	{
		id: "o3",
		customer: {
			name: "Georgi",
			vip: true,
		},
		createdAt: "2024-01-08",
		items: [{ name: "Monitor", price: 500, quantity: 2 }],
	},
	{
		id: "o4",
		customer: {
			name: "Ana",
			vip: false,
		},
		createdAt: "2024-01-10",
		items: [],
	},
];

console.log(sortOrders(orders));

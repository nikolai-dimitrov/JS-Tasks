// Sort array of nested objects by three criteria and nested field
// City ascending, Date descending, Total descending

const orders = [
	{
		id: 1,
		customer: "Ivan",
		address: { city: "Sofia" },
		date: "2025-01-10",
		total: 150,
	},
	{
		id: 2,
		customer: "Anna",
		address: { city: "Plovdiv" },
		date: "2025-01-12",
		total: 200,
	},
	{
		id: 3,
		customer: "Boris",
		address: { city: "Sofia" },
		date: "2025-01-08",
		total: 300,
	},
	{
		id: 4,
		customer: "Evgeni",
		address: { city: "Plovdiv" },
		date: "2025-01-11",
		total: 180,
	},
];

orders.sort((a, b) => {
	const cityResult = a.address.city.localeCompare(b.address.city);
	if (cityResult != 0) {
		return cityResult;
	}

	const dateResult = new Date(b.date) - new Date(a.date);
	if (dateResult != 0) {
		return dateResult;
	}

	const totalResult = b.total - a.total;
    if(totalResult != 0) {
        return totalResult
    }
});

console.log(orders)

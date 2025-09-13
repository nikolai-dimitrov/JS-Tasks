const items = [
	{ id: 1, name: "Alice", age: 25 },
	{ id: 2, name: "Bob" },
	{ id: 3, name: "Charlie", age: 30 },
];

const filteredItems = items.filter((currentItem) => {
	if ("name" in currentItem && "age" in currentItem) {
		return currentItem;
	}
});

console.log(filteredItems);

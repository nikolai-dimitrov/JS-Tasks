const users = [
	{ name: "Alice", age: 25 },
	{ name: "Bob", age: 30 },
	{ name: "Charlie", age: 17 },
];

const processedUsers = users
	.filter((user) => user.age > 18)
	.sort((a, b) => b.age - a.age);

console.log(processedUsers);

const users = [
	{ name: "Alice", age: 30 },
	{ name: "Bob", age: 25 },
	{ name: "Aira", age: 25 },
	{ name: "Alice", age: 13 },

];

const sortedUsers = users.sort((a, b) => {
	console.log(a.age - b.age);
	const comparedNamesResult = a.name.localeCompare(b.name);
	if (comparedNamesResult != 0) {
		return comparedNamesResult;
	}

    if (a.age !== b.age) {
        return a.age - b.age
    }
});
console.log(sortedUsers);

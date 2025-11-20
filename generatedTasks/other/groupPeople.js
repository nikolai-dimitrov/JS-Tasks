const people = [
	{ name: "Alice", age: 25 },
	{ name: "Bob", age: 30 },
	{ name: "Charlie", age: 25 },
	{ name: "David", age: 30 },
	{ name: "Eve", age: 35 },
];

const groupPeople = () => {
	const groupedPeople = {};
	people.forEach((currentElement) => {
		if (!groupPeople[currentElement.age]) {
			groupPeople[currentElement.age] = [];
		}

		groupPeople[currentElement.age].push(currentElement.name);
	});

    console.log(groupPeople)
};

groupPeople(people);

const students = [
	{ first: "Ivan", last: "Petrov" },
	{ first: "Anna", last: "Ivanova" },
	{ first: "Anna", last: "Petrov" },
	{ first: "Boris", last: "Petrov" },
	{ first: "Anna", last: "Petrov" },
];

students.sort((a, b) => {
	const firstName = a.first.localeCompare(b.first);
	if (firstName != 0) {
		return firstName;
	}

	const lastName = a.last.localeCompare(b.last);
	if (lastName != 0) {
		return lastName;
	}
});

console.log(students);

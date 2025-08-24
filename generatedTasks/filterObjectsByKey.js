const students = [
	{ name: "Alice", score: 80 },
	{ name: "Bob", score: 55 },
	{ name: "Charlie", score: 90 },
];

const topStudents = (students, minScore) => {
	const filteredNames = [];

	students.forEach((currentStudent) => {
		if (currentStudent.score >= minScore) {
			console.log(currentStudent["name"]);
			filteredNames.push(currentStudent["name"]);
		}
	});

	return filteredNames;
};

console.log(topStudents(students, 70));

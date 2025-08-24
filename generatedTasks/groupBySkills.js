const people = [
	{ name: "Alice", skills: ["JS", "React"] },
	{ name: "Bob", skills: ["JS", "Node"] },
	{ name: "Charlie", skills: ["Python"] },
	{ name: "David", skills: ["JS", "React", "Node"] },
];

const groupBySkills = (people) => {
	const groupedPeople = {};
	people.forEach((element) => {
		element.skills.forEach((currentSkill) => {
			if (!groupedPeople[currentSkill]) {
				groupedPeople[currentSkill] = [];
			}
			groupedPeople[currentSkill].push(element.name);
		});
	});

	console.log(groupedPeople);
};

groupBySkills(people);

const sortUsers = (users) => {
	return users.sort((a, b) => {
		const activityResult = b.isActive - a.isActive;
		if (activityResult != 0) {
			return activityResult;
		}

		const scoreResult = b.score - a.score;
		if (scoreResult != 0) {
			return scoreResult;
		}

		const ageResult = a.age - b.age;
		if (ageResult != 0) {
			return ageResult;
		}

		const nameResult = a.name.localeCompare(b.name);
		if (nameResult != 0) {
			return nameResult;
		}
	});
};

const users = [
	{ id: 1, name: "Ivan", age: 25, score: 80, isActive: true },
	{ id: 2, name: "Maria", age: 30, score: 90, isActive: false },
	{ id: 3, name: "George", age: 22, score: 90, isActive: true },
	{ id: 4, name: "Ana", age: 25, score: 70, isActive: true },
	{ id: 5, name: "Peter", age: 30, score: 80, isActive: false },
];

console.log(sortUsers(users));

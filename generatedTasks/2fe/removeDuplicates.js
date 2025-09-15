const removeDuplicates = (users) => {
	const uniqueUserIds = [];

	const uniqueUsers = users.filter((user) => {
		if (!uniqueUserIds.includes(user.id)) {
			uniqueUserIds.push(user.id);
			return user;
		}
	});

	return uniqueUsers
};

const users = [
	{
		id: 1,
		name: "Alice",
	},
	{
		id: 2,
		name: "Bob",
	},
	{
		id: 1,
		name: "Alice",
	},
];

const uniqueUsers = removeDuplicates(users);
console.log(uniqueUsers); // expected output: array with objects only alice with id: 1 and bob with id: 2

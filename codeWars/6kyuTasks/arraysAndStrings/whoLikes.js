const getLikesString = (names) => {
	const map = {
		0: "no one likes this",
		1: `${names[0]} likes this`,
		2: `${names[0]} and ${names[1]} like this`,
		3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
		4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
	};

	return map[Math.min(4, names.length)];
};

console.log(getLikesString([]));
console.log(getLikesString(["Max", "John", "Mark"]));
console.log(getLikesString(["Alex", "Jacob", "Mark", "Max"]));

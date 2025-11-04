Task;
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions
// Removed (W<->E or S<->N side by side).
const directionReduction = (arr) => {
	const stack = [];
	const map = {
		"NORTH-SOUTH": true,
		"SOUTH-NORTH": true,
		"EAST-WEST": true,
		"WEST-EAST": true,
	};

	while (arr.length > 0) {
		const currentDirection = arr.shift();
		if (stack.length >= 1) {
			const directions = `${stack[stack.length - 1]}-${currentDirection}`;
			if (map[directions]) {
				stack.pop();
			} else {
				stack.push(currentDirection);
			}
		} else {
			stack.push(currentDirection);
		}
	}

	return stack;
};

directionReduction([
	"NORTH",
	"SOUTH",
	"SOUTH",
	"EAST",
	"WEST",
	"NORTH",
	"WEST",
]);

directionReduction(["NORTH", "SOUTH", "EAST", "WEST"]);

directionReduction(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]);

directionReduction(["NORTH", "WEST", "SOUTH", "EAST"]);

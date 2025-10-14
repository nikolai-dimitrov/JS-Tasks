// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made.
// Note that each word in the array counts as a 90° rotation in that direction.

const spinAround = (turns) => {
	let directionDegrees = 0;
	for (const direction of turns) {
		direction == "left"
			? (directionDegrees -= 90)
			: direction == "right"
			? (directionDegrees += 90)
			: 0;
	}

	const rotationsMade = Math.floor(Math.abs(directionDegrees) / 360);
	return rotationsMade;
};

spinAround([
	"left",
	"left",
	"right",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"right",
	"left",
	"left",
	"right",
	"right",
	"right",
	"right",
	"left",
	"left",
	"right",
	"right",
]);

spinAround(["left", "right", "left", "right"]);
spinAround([
	"right",
	"right",
	"right",
	"right",
	"right",
	"right",
	"right",
	"right",
]);

// spinAround(["left", "left", "left", "left"]);
// spinAround([
// 	"right",
// 	"left",
// 	"left",
// 	"right",
// 	"left",
// 	"left",
// 	"right",
// 	"left",
// 	"right",
// 	"right",
// 	"left",
// 	"left",
// 	"right",
// 	"right",
// 	"right",
// 	"left",
// 	"left",
// 	"right",
// ]);
// spinAround([])
// spinAround('left')
// spinAround('right')
spinAround(["right", "right", "right", "left", "right", "right"]);

// spinAround([
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// 	"right",
// ]);
spinAround([
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
	"left",
]);

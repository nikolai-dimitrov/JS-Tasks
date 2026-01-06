// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.
// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?
// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

const turtleRacing = (aSpeed, bSpeed, aLeadDistance) => {
	if (aSpeed >= bSpeed) {
		return null;
	}

	const decimal = aLeadDistance / (bSpeed - aSpeed);

	const date = new Date(0, 0);

	date.setMinutes(+Math.round(decimal.toFixed(2) * 60));

	const hours = date.getHours();
	const mins = date.getMinutes();
	const seconds = date.getSeconds();

	return [hours, mins, seconds];
};

console.log(turtleRacing(720, 850, 70));
console.log(turtleRacing(80, 91, 37));

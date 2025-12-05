// It uses four single-character commands:

// i: Increment the value
// d: Decrement the value
// s: Square the value
// o: Output the value to a result array
const parser = (commandsString) => {
	const parse = {
		startValue: 0,
		logs: [],
		i() {
			this.startValue += 1;
		},
		d() {
			this.startValue -= 1;
		},
		s() {
			this.startValue = Math.pow(this.startValue, 2);
		},
		o() {
			this.logs.push(this.startValue);
		},
	};

	for (const command of commandsString) {
		if (parse[command]) {
			parse[command]();
		}
	}

	return parse.logs;
};

console.log(parser("iiisdoso"));
console.log(parser("iiisdosodddddiso"));

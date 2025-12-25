const meeting = (s) => {
	const names = s.split(";");
	const splittedNames = names.map((el) => el.split(":").reverse());
	let result = "";

	splittedNames.sort((a, b) => {
		if (a[0].localeCompare(b[0]) == 0) {
			return a[1].localeCompare(b[1]);
		}

		return a[0].localeCompare(b[0]);
	});

	splittedNames.forEach((el) => {
		result += `(${el.join(", ").toUpperCase()})`;
	});

	return result.trim();
};

console.log(
	meeting(
		"Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
	)
);

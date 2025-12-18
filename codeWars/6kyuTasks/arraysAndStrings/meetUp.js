const checkArray = (arr) => {
    let filtered = arr.filter((el) => el.age >= 10)
	let ages = filtered.map((el) => String(el.age)[0]).sort((a, b) => a - b);

	const ageGroups = {};
	ages.forEach((el) => {
		if (!ageGroups[el]) {
			ageGroups[el] = [];
		}

		ageGroups[el].push(1);
	});

	return Object.keys(ageGroups).length < 9 ? false : true;
};

console.log(
	checkArray([
		{
			firstName: "Harry",
			lastName: "K.",
			country: "Brazil",
			continent: "Americas",
			age: 19,
			language: "Python",
		},
		{
			firstName: "Kseniya",
			lastName: "T.",
			country: "Belarus",
			continent: "Europe",
			age: 29,
			language: "JavaScript",
		},
		{
			firstName: "Jing",
			lastName: "X.",
			country: "China",
			continent: "Asia",
			age: 39,
			language: "Ruby",
		},
		{
			firstName: "Noa",
			lastName: "A.",
			country: "Israel",
			continent: "Asia",
			age: 40,
			language: "Ruby",
		},
		{
			firstName: "Andrei",
			lastName: "E.",
			country: "Romania",
			continent: "Europe",
			age: 59,
			language: "C",
		},
		{
			firstName: "Maria",
			lastName: "S.",
			country: "Peru",
			continent: "Americas",
			age: 60,
			language: "C",
		},
		{
			firstName: "Lukas",
			lastName: "X.",
			country: "Croatia",
			continent: "Europe",
			age: 75,
			language: "Python",
		},
		{
			firstName: "Chloe",
			lastName: "K.",
			country: "Guernsey",
			continent: "Europe",
			age: 88,
			language: "Ruby",
		},
		{
			firstName: "Viktoria",
			lastName: "W.",
			country: "Bulgaria",
			continent: "Europe",
			age: 98,
			language: "PHP",
		},
		{
			firstName: "Piotr",
			lastName: "B.",
			country: "Poland",
			continent: "Europe",
			age: 128,
			language: "JavaScript",
		},
	])
);

console.log(
	checkArray([
		{
			firstName: "Sofia",
			lastName: "P.",
			country: "Italy",
			continent: "Europe",
			age: 41,
			language: "Clojure",
		},
		{
			firstName: "Jayden",
			lastName: "P.",
			country: "Jamaica",
			continent: "Americas",
			age: 42,
			language: "JavaScript",
		},
		{
			firstName: "Sou",
			lastName: "B.",
			country: "Japan",
			continent: "Asia",
			age: 43,
			language: "Python",
		},
		{
			firstName: "Rimas",
			lastName: "C.",
			country: "Jordan",
			continent: "Asia",
			age: 44,
			language: "Java",
		},
	])
);

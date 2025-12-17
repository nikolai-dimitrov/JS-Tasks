// write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:
const findOddNames = (arr) => {
	const result = [];
	arr.forEach((el) => {
		const asciiSum = el["firstName"]
			.split("")
			.reduce(
				(prevVal, currentVal) => prevVal + currentVal.charCodeAt(),
				0
			);

		asciiSum % 2 != 0 && result.push(el);
	});

	return result;
};

findOddNames([
	{
		firstName: "Aba",
		lastName: "N.",
		country: "Ghana",
		continent: "Africa",
		age: 21,
		language: "Python",
	},
	{
		firstName: "Abb",
		lastName: "O.",
		country: "Israel",
		continent: "Asia",
		age: 39,
		language: "Java",
	},
]);

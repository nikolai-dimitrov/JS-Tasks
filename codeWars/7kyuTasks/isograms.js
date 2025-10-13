// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Solution without set.
const isIsogram = (str) => {
	str = str.toLowerCase();
	for (let i = 0; i < str.length; i++) {
		const element = str[i];
		if (str.lastIndexOf(element) != i) {
			return false;
		}
	}

	return true;
};

console.log(isIsogram("Dermatoglyphics")); // True
console.log(isIsogram("aba")); // False
console.log(isIsogram("moOse")); // False
console.log(isIsogram("")); // False

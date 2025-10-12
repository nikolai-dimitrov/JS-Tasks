// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0.
//  Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
// Without using math.max / math.min solution

function findDifference(agesArray) {
	let minAge = Infinity;
	let maxAge = 0;

	agesArray.forEach((num) => {
		if (num > maxAge) {
			maxAge = num;
		}

		if (num < minAge) {
			minAge = num;
		}
	});

    const difference = maxAge - minAge

	return [minAge, maxAge, difference];

}

// Sort solution
// function findDifference(agesArray) {
// 	agesArray.sort((a, b) => a - b);

// 	return [agesArray[0], agesArray[agesArray.length - 1], agesArray[agesArray.length - 1] - agesArray[0]];
// }

console.log(findDifference([82, 15, 6, 38, 35]));

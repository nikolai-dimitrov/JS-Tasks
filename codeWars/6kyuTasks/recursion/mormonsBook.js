const mormons = (startingNumber, reach, target) => {
	let result = 0;
	let reachedMormons = 0;
	if (startingNumber > target) {
		return 0;
	}

	reachedMormons += startingNumber * reach;
    startingNumber += reachedMormons

    result += 1

	if (target - startingNumber <= 0) {
		return result;
	}

	if (target - startingNumber > 0) {
		result += mormons(startingNumber, reach, target);
	}

	return result;
};

console.log(mormons(10, 3, 9));
console.log(mormons(40, 2, 120));
console.log(mormons(40, 2, 121));
console.log(mormons(20000, 2, 7000000000));

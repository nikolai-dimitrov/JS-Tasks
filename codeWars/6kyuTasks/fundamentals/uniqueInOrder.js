const unique = (iterable) => {
	const tempResult = [];

	if (iterable.length == 1) {
		return [iterable];
	}

	for (i = 0; i < iterable.length - 1; i++) {
		let currentSymbol = iterable[i];
		let nextSymbol = iterable[i + 1];

		if (i == iterable.length - 2) {
			if (tempResult[tempResult.length - 1] != currentSymbol) {
				tempResult.push(currentSymbol);
			}
			if (tempResult[tempResult.length - 1] != nextSymbol) {
				tempResult.push(nextSymbol);
			}
			break;
		}

		if (nextSymbol && currentSymbol != nextSymbol) {
			tempResult.push(currentSymbol);
		}
	}

	return tempResult;
};

unique("AAAABBBCCDAABBB");
unique("ABBCcAD");
unique([1, 2, 2, 3, 3]);

function rotateLeft(d, arr) {
	for (let i = 0; i < d; i++) {
		const firstEl = arr.shift();
		arr.push(firstEl);
	}

	return arr;
}

console.log(rotateLeft(2, [1, 2, 3, 4, 5]));

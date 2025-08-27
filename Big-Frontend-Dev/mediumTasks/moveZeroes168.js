const list = [1, 0, 0, 2, 3];

const moveZeros = (arr) => {
	for (let i = arr.length; i >= 0; i--) {
		const currentNum = arr[i];
		if (currentNum == 0) {
			arr.splice(i, 1);
			arr.push(0);
		}
	}

	return arr;
};


moveZeros(list);
console.log(list);

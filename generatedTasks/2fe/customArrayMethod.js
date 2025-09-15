Array.prototype.myMap = function (callback) {
	const newArr = this.map((el) => callback(el));
	return newArr;
};

const arr = [1, 2, 3];

const newArr = arr.myMap((x) => x * 2);
console.log(newArr);

const flatten = (arr) => {
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];

        if(Array.isArray(element)) {
            result.push(...flatten(element))
        }else {
            result.push(element)
        }
	}
    
    return result
};

console.log(flatten([1, [2, 3], 4]));
console.log(flatten([1, [2, 3, [4, 5, [6]]]]));

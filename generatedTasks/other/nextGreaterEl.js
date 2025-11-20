const nextGreater = (arr) => {
	const stack = [];
	const result = [];
	for (i = 0; i <= arr.length; i++) {
		const currentElement = arr[i];
        
		while (stack.length > 0 && currentElement > arr[stack[stack.length - 1]]) {
			stack.pop();
			result.push(currentElement);
		}

		stack.push(i);
	}

    console.log(result)
};

nextGreater([4, 5, 2, 10]);
nextGreater([3, 2, 1]);

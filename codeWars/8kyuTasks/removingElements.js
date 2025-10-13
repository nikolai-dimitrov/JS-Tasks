// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// None of the arrays will be empty, so you don't have to worry about that!

function removeElements(arr) {
	if (arr.length == 1) {
		return arr;
	}

	for (let i = arr.length - 1; i >= 1; i--) {
		if (i % 2 != 0) {
			arr.splice(i, 1);
		}
	}

    return arr
}

removeElements(["Hello", "Goodbye", "Hello Again"]);
removeElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
removeElements([["Goodbye"], { Great: "Job" }]);

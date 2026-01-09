// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
// O(n + m) complexity
function matchingStrings(stringList, queries) {
	const map = {};
	const result = [];

	stringList.forEach((el) => {
		if (map[el] == undefined) {
			map[el] = 0;
		}
		map[el] += 1;
	});

	queries.forEach((el) => {
		if (map[el] == undefined) {
			result.push(0);
		} else {
			result.push(map[el]);
		}
	});

	return result;
}

// Check stringList for these queries
matchingStrings(["ab", "ab", "abc"], ["ab", "abc", "bc"]);

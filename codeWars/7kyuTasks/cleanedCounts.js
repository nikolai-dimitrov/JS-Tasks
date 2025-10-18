function cleanedCounts(data) {
	const highestElement = Math.max(...data);
	const firstHighestEl = data.indexOf(highestElement);
    for (let i = firstHighestEl; i < data.length; i++) {
        data[i] = highestElement
        
    }
    console.log(data)
	return data;
}
// cleanedCounts([1,2,5,7,2])
// cleanedCounts([10, 11, 10]);
// cleanedCounts([1,1,2,2,1,2,2,2,2])
cleanedCounts([2,1,2])
// cleanedCounts([4,4,4,4])
// cleanedCounts([5,5,6,5,5,5,5,6])

// Task
// Given a matrix (NxN), and a specific value.

// What the value does is it changes the main diagonal of the matrix. The main diagonal is basically the trace of the matrix (read this article if you are unaware of what the trace is).

// If value > 0, the main diagonal drops down.
// If value < 0, the main diagonal goes up.
// If value = 0, the diagonal does not change.

const matrixDiagonal = (matrix, value) => {
	let sum = 0;
	for (let i = 0; i < matrix.length; i++) {
		const currentRow = matrix[i];
		if (value > 0) {
			if (i + value < matrix.length) {
				sum += matrix[i + value][i];
			}
		} else if (value < 0) {
			let absoluteValue = Math.abs(value);
			if (i + absoluteValue < currentRow.length) {
				sum += matrix[i][i + absoluteValue];
			}
		} else {
			sum += matrix[i][i];
		}
	}

	return sum;
};

matrixDiagonal(
	[
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
		[13, 14, 15, 16],
	],
	0
);

// matrixDiagonal(
// 	[
// 		[1, 2, 3, 4],
// 		[5, 6, 7, 8],
// 		[9, 10, 11, 12],
// 		[13, 14, 15, 16],
// 	],
// 	2
// );

// matrixDiagonal(
// 	[
// 		[1, 2, 3, 4],
// 		[5, 6, 7, 8],
// 		[9, 10, 11, 12],
// 		[13, 14, 15, 16],
// 	],
// 	-2
// );

// function matrixDiagonal(matrix,value) {
//     return matrix.reduce((acc,el,index)=>
//          acc+=el[index-value],0)
//     }

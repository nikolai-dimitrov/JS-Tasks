const TreeNode = function (value, left, right) {
	this.value = value;
	this.left = left;
	this.right = right;
};
const convertArrayToTree = (arr, i=0) => {
	
    if (i >= arr.length) return;
    return new TreeNode(arr[i], convertArrayToTree(arr,i * 2 + 1), convertArrayToTree(arr, i * 2 + 2));

};

// convertArrayToTree([17, 0, -4, 3, 15]);
console.log(convertArrayToTree([17, 0, -4, 3, 15, 1, 5, 7, 9]))




// [17, 0, -4, 3, 15, 1, 5, 7, 9];
//               17
//              0  4
//           3 15 1  5
//         7 9

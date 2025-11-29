let a = [1, 2, 3];

const funcX = (a) => {
	// a = []
	a = [...a];
	a.pop();

	console.log(a, "INTO the funcX");
};

funcX(a);

console.log(a, "after the funcX is invoked");

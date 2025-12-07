// Given two arrays a and b write a function comp(a, b) (or compSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
const compare = (a, b) => {
	if (!Array.isArray(a) || !Array.isArray(b)) {
		return false;
	}

	if (a.length != b.length) {
		return false;
	}

	const isEqual = a.every((el) => {
		let squared = el * el;

		if (b.includes(squared)) {
			let index = b.indexOf(squared);
			b.splice(index, 1);
			return true;
		}
	});

	if (b.length == 0 && isEqual) {
		return true;
	} else {
		return false;
	}
};

compare(
	[121, 144, 19, 161, 19, 144, 19, 11],
	[121, 14641, 20736, 361, 25921, 361, 20736, 361]
);

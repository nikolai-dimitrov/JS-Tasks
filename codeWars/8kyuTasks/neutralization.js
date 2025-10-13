// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.

// The two strings will be the same length.

const neutralization = (s1, s2) => {
	const options = {
		"++": "+",
		"--": "-",
		"+-": "0",
		"-+": "0",
	};
    
	let result = "";

	for (i = 0; i < s1.length; i++) {
		const currentCharS1 = s1[i];
		const currentCharS2 = s2[i];

		const key = `${currentCharS1}${currentCharS2}`;

		result += options[key];
	}

	return result;
};

neutralization("--++--", "++--++"); // "000000"

neutralization("-+-+-+", "-+-+-+"); // "-+-+-+"

neutralization("-++-", "-+-+"); // "-+00"

// Suppose a student can earn 100% on an exam by getting the answers all correct or all incorrect.
// Given a potentially incomplete answer key and the student's answers, write a function that determines whether or not a student can still score 100%.
// Incomplete questions are marked with an underscore, "_".

const possiblyPerfect = (key, answers) => {
	const keysArray = key[0].split("");
	const answersArray = answers[0].split("");

	let unknownAnswers = 0,
		correctAnswers = 0,
		inCorrectAnswers = 0;

	for (let i = 0; i < answersArray.length; i++) {
		const answer = answersArray[i];
		const currentKey = keysArray[i];
		if (currentKey == "_") {
			unknownAnswers += 1;
		} else {
			currentKey == answer
				? (correctAnswers += 1)
				: (inCorrectAnswers += 1);
		}
	}

	return (unknownAnswers + correctAnswers == keysArray.length) |
		(unknownAnswers + inCorrectAnswers == keysArray.length)
		? true
		: false;
};

// let x = key.every((k, i) => k === '_' || k === answers[i]) || key.every((k, i) => k !== answers[i]);
// function test(key, answers) {
// 	let first = key.every((k, i) => k === "_" || k === answers[i]);
// 	let second = key.every((k, i) => k !== answers[i]);
// 	let result = first || second;
// return result
// }

// test(["CT"],["DT"])
test(["BA__"], ["BACC"]);
// possiblyPerfect(["ADA"],["ABA"])
// possiblyPerfect(["CT"],["DT"])

// possiblyPerfect(["BA__"], ["BACC"]);
// possiblyPerfect(["A_C_B"], ["ADCEB"]);
// possiblyPerfect(["B_B"], ["BDC"]);
// possiblyPerfect(["T_FFF"], ["FFTTT"]);
// possiblyPerfect(["BA__"], ["BACC"]);
// possiblyPerfect(["ABA_"], ["BACC"]);
// possiblyPerfect(["ABC_"],["BACC"])
// possiblyPerfect(["B_"],["CA"])
// possiblyPerfect(["BA"],["CA"])
// possiblyPerfect(["B"],["B"])
// possiblyPerfect(["_T__"],["TFFF"])
// possiblyPerfect(["_T__"],["TTFT"])
// possiblyPerfect(["_TTT"],["TTFT"])
// possiblyPerfect(["_TTT"],["TTTT"])
// possiblyPerfect(["_TTT"],["FFFF"])
// possiblyPerfect(["____"],["FFFF"])

const mirror = (text) => {
	const textArr = text.split(" ");
	const longestWordLen = Math.max(...textArr.map((el) => el.length));

	let result = "";

	for (let i = 0; i < textArr.length; i++) {
		let reversedWord = [...textArr[i]].reverse().join("");
		if (i == 0) {
			result += `${'*'.repeat(longestWordLen + 4)}\n`;

		}

        let spaces = longestWordLen - reversedWord.length

		result += `* ${reversedWord} ${' '.repeat(spaces)}*\n`;

		if (i == textArr.length - 1) {
			result += `${'*'.repeat(longestWordLen + 4)}`;
		}
	}

	console.log(result);
    return result
};

mirror("Hello Worldsss");
mirror("Codewars");

const findLetters = (txt, a, b) => {

	for (let i = 0; i < txt.length; i++) {
		const currentLetter = txt[i];
		const nextLetter = txt[i + 1];
		if (currentLetter == a && nextLetter != b) {
			return false;
		}
	}
	return true;
};

findLetters("he headed to the store", "h", "e");
findLetters('abcdee', 'e', 'e')
findLetters("i found an ounce with my hound", "o", "u")
findLetters("we found your dynamite", "d", "y")
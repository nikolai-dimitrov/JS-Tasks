const grabScrab = (anagram, dictionary) => {
	const result = [];
	const anagramMap = {};

	for (const char of anagram) {
		if (!anagramMap[char]) {
			anagramMap[char] = 0;
		}
		anagramMap[char] += 1;
	}

	for (const word of dictionary) {
		wordCharsMap = {};

		for (const char of word) {
			if (anagram.indexOf(char) == -1) {
				break;
			}

			if (!wordCharsMap[char]) {
				wordCharsMap[char] = 0;
			}

			wordCharsMap[char] += 1;
		}

		result.push(word);

		for (const key in anagramMap) {
			if (anagramMap[key] !== wordCharsMap[key]) {
				result.pop();
				break;
			}
		}
	}

	return result;
};
grabScrab("ortsp", ["sport", "parrot", "ports", "matey"]);
grabScrab("ainstuomn", ["mountains", "hills", "mesa"]);
grabScrab("oob", ["bob", "baobab"]);


// function grabscrab(anagram, dictionary) {
// 	anagram=anagram.split('').sort().join('');
// 	console.log(anagram, 'anagram')
// 	return dictionary.filter(a=>a.split('').sort().join('')===anagram)
//   }

// console.log(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]));

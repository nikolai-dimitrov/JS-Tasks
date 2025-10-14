const emojify = (emojiString) => {
	const emojiMap = {
		":)": 0,
		":D": 1,
		">(": 2,
		">:C": 3,
		":/": 4,
		":|": 5,
		":O": 6,
		";)": 7,
		"^.^": 8,
		":(": 9,
	};

    if(emojiString.length == 0) {
        return ''
    }

	const subStringsArr = emojiString.split("  ");
	let charCodesArray = [];
	let result = "";

	for (const emojiSequence of subStringsArr) {
		let currentCharCode = "";
		emojiSequence.split(" ").forEach((emoji) => {
			if (emoji != "0") {
				currentCharCode += emojiMap[emoji];
			}
		});

		charCodesArray.push(currentCharCode);
	}

	result += String.fromCharCode(...charCodesArray);

	return result;
};

// emojify(":D :) :/  :D :) :|");
// emojify(
// 	";) >(  :D :) :D  :D :) ^.^  :D :) ^.^  :D :D :D  >:C >(  :D :D :(  :D :D :D  :D :D :/  :D :) ^.^  :D :) :)  >:C >:C"
// );

emojify(":)")

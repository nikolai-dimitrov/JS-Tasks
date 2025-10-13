const flickSwitch = (arr) => {
	const result = [];
	let currentBooleanValue = true;

	arr.forEach((el) => {
		if (el == "flick") {
			currentBooleanValue = !currentBooleanValue;
		}

		result.push(currentBooleanValue);
	});
    
    return result
};

flickSwitch(["codewars", "flick", "code", "wars"]);
flickSwitch(["flick", "chocolate", "adventure", "sunshine"]);
flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]);

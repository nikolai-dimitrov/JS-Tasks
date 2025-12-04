const breakCamelCase = (str) => {
	result = "";

	for (let i = 0; i < str.length; i++) {
		const char = str[i];

		if (char == char.toUpperCase()) {
			result += " ";
		}

		result += char;
	}

	return result;
};

breakCamelCase("camelCasing");
breakCamelCase("identifier");
breakCamelCase("");

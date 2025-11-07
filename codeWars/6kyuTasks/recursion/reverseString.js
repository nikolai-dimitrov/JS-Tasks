const reverseString = (string) => {
	if (string.length <= 1) {
		return string;
	}

    return reverseString(string.slice(1) + string[0])
};

reverseString("hello");

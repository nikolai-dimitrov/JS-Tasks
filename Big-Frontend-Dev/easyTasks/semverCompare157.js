const compare = (version1, version2) => {
	version1 = version1.split(".").map((el) => Number(el));
	version2 = version2.split(".").map((el) => Number(el));

	for (let i = 0; i < version1.length; i++) {
		if (version1[i] == version2[i]) {
			continue;
		}

		return version1[i] < version2[i] ? -1 : 1;
	}

	return 0;
};

compare("12.1.0", "12.0.9");
// 1, meaning first one is greater
compare("12.1.0", "12.1.2");
// -1, meaning latter one is greater
compare("5.0.1", "5.0.1");
// 0, meaning they are equal.

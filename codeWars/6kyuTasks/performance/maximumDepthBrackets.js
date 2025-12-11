// Given a balanced string with brackets like: "AA(XX((YY))(U))" find the substrings that are enclosed in the greatest depth.
const getMaximumDepth = (s) => {
	if (s.length == 0) {
		return [""];
	}

	const openingBrackets = [];
	const map = {};

	let maxDepth = 0;
	let currentSubstring = "";
	let bracketAppear = false;

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (char == "(") {
			openingBrackets.push(char);
			currentSubstring = "";
			bracketAppear = true;
		} else if (char == ")") {
			openingBrackets.pop();
			currentSubstring = "";
			bracketAppear = true;
		} else {
			currentSubstring += char;
		}

		if (openingBrackets.length >= maxDepth) {
			maxDepth = openingBrackets.length;

			if (s[i + 1] == ")") {
				if (!map[maxDepth]) {
					map[maxDepth] = [];
				}

				map[maxDepth].push(currentSubstring);
			}
		}
	}
	if (bracketAppear == false) {
		return [s];
	}

	const values = Object.values(map);
	return values[values.length - 1];
};
console.log(getMaximumDepth("AA(XX((YY))(U))"));
console.log(getMaximumDepth("((AAX(AB)(UP)F(Z))(HH))"));
console.log(
	getMaximumDepth(
		"FB(TAIHJK(NZZCGDZXKF(SYMBLACQ)SBJMRFM)PRTRX(JCLYCOXIMOKGGIE)MWIOIJDCLXDSQFHK)WLVYSMNNHIGKR(MOIZLOT(RWMAVXSJQROHJ(GZURPPOQJVMYCE(VCPXSHXQ)LETIEWE(CBC)AAHEEO)NZHIGXBSJATXV)BSBYCMKFFAFZIK(KECNRQ)PIIQZGIDMLNQRQS)VGXXBYD"
	)
);
console.log(getMaximumDepth("AAA"));
console.log(getMaximumDepth(""));

// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Output :: "Position of alphabet: 1"
// Note: Only lowercased English letters are tested

function position(letter) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
    console.log(alphabet.indexOf(letter) + 1)
}

position("z");

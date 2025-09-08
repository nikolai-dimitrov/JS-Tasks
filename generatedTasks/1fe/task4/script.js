const charactersSection = document.getElementById("characters");
const showCharactersBtn = document.createElement("button");
showCharactersBtn.textContent = "Show Characters";

charactersSection.appendChild(showCharactersBtn);

const fetchData = async (url) => {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Res status: ${response.status}`);
		}

		const result = await response.json();

		return result;
	} catch (err) {
		console.log(err);
	}
};

const showCharacters = async () => {
	const data = await fetchData("https://swapi.info/api/people");
	const filteredCharacters = data.filter(
		(character) => character.height > 180
	);

	const ulElement = document.createElement("ul");

	filteredCharacters.forEach((character) => {
		const liElement = document.createElement("li");

		liElement.textContent = character.name;

		ulElement.appendChild(liElement);
	});

	charactersSection.appendChild(ulElement);
};

showCharactersBtn.addEventListener("click", showCharacters);

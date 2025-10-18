// Ava, Mark, Sheila, and Pete are at a party. However, Ava and Sheila are only staying if there are at least 4 people, Pete is only staying if there's at least 1 person, and Mark is only staying if there are at least 5 people. Therefore, Mark leaves, which makes Ava and Sheila leave, and Pete is left alone.
// Given an array with the preferences of every person at a party for the minimum number of people present, determine how many people will stay.
const partyPeople = (party) => {
	const sortedParty = party.sort((a, b) => a - b);

	for (let i = sortedParty.length - 1; i >= 0; i--) {
		const element = sortedParty[i];
		if (element > sortedParty.length) {
			sortedParty.pop();
		}
	}
    console.log(sortedParty.length)
	return sortedParty.length;
};

partyPeople([4, 5, 4, 1]);
// partyPeople([10, 12, 15, 15, 5]);
// partyPeople([2, 1, 2, 0]);
// partyPeople([0, 0, 0, 0]);
// partyPeople([5, 5, 5, 5]);
// partyPeople([5, 5, 5, 5, 5]);

// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.
// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

const bingo = (ticket, win) => {
	let totalWins = 0;

	for (let i = 0; i < ticket.length; i++) {
		const [currentTicket, ticketNumber] = ticket[i];
		let isNumberFound = false;
		currentTicket.split("").forEach((el) => {
			if (el.charCodeAt() == ticketNumber && !isNumberFound) {
				isNumberFound = true;
				totalWins += 1;
			}
		});
	}

	return totalWins >= win ? "Winner!" : "Loser!";
};

console.log(
	bingo(
		[
			["EABGA", 74],
			["QZOX", 79],
			["DGUBEZM", 89],
			["THRLISH", 72],
			["CEQMW", 82],
		],
		2
	)
);

// console.log(
// 	bingo(
// 		[
// 			["ABC", 65],
// 			["HGR", 74],
// 			["BYHT", 74],
// 		],
// 		2
// 	)
// );

// console.log(
// 	bingo(
// 		[
// 			["ABC", 65],
// 			["HGR", 74],
// 			["BYHT", 74],
// 		],
// 		1
// 	)
// );

// console.log(
// 	bingo(
// 		[
// 			["HGTYRE", 74],
// 			["BE", 66],
// 			["JKTY", 74],
// 		],
// 		3
// 	)
// );

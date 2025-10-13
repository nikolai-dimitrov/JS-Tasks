// Given an array of seats, return the maximum number of new people which can be seated, as long as there is at least a gap of 2 seats between people.

// Empty seats are given as 0.
// Occupied seats are given as 1.
// Don't move any seats which are already occupied, even if they are less than 2 seats apart. Consider only the gaps between new seats and existing seats.

const getSeats = (seats) => {
	result = 0;
	let lastTakenSeat = 0;
	if (seats.length < 3) {
        seats.filter(el => el == 1).length > 0 ? result += 0 : result += 1
		return result;
	}

	for (let i = 0; i < seats.length; i++) {
		const currentSeat = seats[i];

		if (i == 0 && currentSeat == 0) {
			const nextSeats = seats.slice(i + 1, i + 3);
			if (nextSeats[0] == 0 && nextSeats[1] == 0) {
				seats[i] = 1;
				result += 1;
			}
		} else if (i == seats.length - 1 && currentSeat == 0) {
			const previousSeats = seats.slice(i - 2, i);
			if (previousSeats[0] == 0 && previousSeats[1] == 0) {
				seats[i] = 1;
				result += 1;
			}
		}

		if (seats[i] == 1) {
			lastTakenSeat = i;
			continue;
		} else {
			const nextSeats = seats.slice(i + 1, i + 3);
			if (
				nextSeats[0] == 0 &&
				nextSeats[1] == 0 &&
				i - lastTakenSeat > 2
			) {
				seats[i] = 1;
				result += 1;
				i += 2;
			}
		}
	}

	return result;
};

// getSeats([0, 0, 0, 1, 0, 0, 1, 0, 0, 0]); // 2
// // [1, 0, 0, 1, 0, 0, 1, 0, 0, 1]

getSeats([0, 0, 0]);

// getSeats([0, 0, 0, 0]); // 2
// // [1, 0, 0, 1]

// getSeats([1, 0, 0, 0, 0, 1]); // 0
// // There is no way to have a gap of at least 2 chairs when adding someone else.

// getSeats([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

// getSeats([
// 	0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0,
// 	0,
// ]);


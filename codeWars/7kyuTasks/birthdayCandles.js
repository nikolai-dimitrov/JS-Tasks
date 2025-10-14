// Given a string containing digits (representing the strength of the candles), calculate the number of blows you need to extinguish all the candles.
// Starting at the beginning of the string, each blow can only reach 3 candles, reducing their strength by one each. You can only reach more candles once those directly in front of you are extinguished.

const blowCandles = (str) => {
	let strCopy = str.split("");
	let totalBlows = 0;

	for (let i = 0; i < str.length; i++) {
		while (strCopy[i] > 0) {
			for (let j = i; j < i + 3; j++) {
				strCopy[j] -= 1;
			}

			totalBlows += 1;
		}
	}

	return totalBlows;
};
// function blowCandles(str) {
//     let blow = 0, blow1 = 0, blow2 = 0;
//     for (let candle of str) {
//       let blow0 = Math.max(candle - blow1 - blow2, 0);
//       blow += blow0;
//       blow2 = blow1;
//       blow1 = blow0;
//     }
//     return blow;
//   }

blowCandles("1321");
blowCandles("0323456");
blowCandles("2113");
blowCandles("0000010001");

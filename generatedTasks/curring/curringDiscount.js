const discount = (percent) => {
	return function currency(currency) {
		return function calcPricing(price) {
			let finalPrice = (price -= price * (percent / 100));
			return `Price: ${finalPrice} ${currency}`;
		};
	};
};

console.log(discount(10)("EUR")(100));

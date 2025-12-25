const createPriceCalculator = (...args) => {
	if (args.length == 3) {
		const [discount, currency, price] = args;
		const finalPrice = price - price * (discount / 100);
		return `Final Price: ${finalPrice} ${currency}, Discount: ${discount}`;
	}
	return function (...newArgs) {
		return createPriceCalculator(...args, ...newArgs);
	};
};
console.log(createPriceCalculator(10)("EUR")(100));
console.log(createPriceCalculator(10, "EUR")(100));
console.log(createPriceCalculator(10)("EUR", 100));

const data = [
	{ name: "John", age: 25, city: "Sofia", address: "asd" },
	{ name: "Maria", age: "30", city: "Plovdiv" },
	{ name: "Ivan", age: 40 },
];

const validateJson = (data) => {
	const errors = [];
	const requiredPropertiesType = {
		name: "string",
		age: "number",
		city: "string",
	};

	data.forEach((el, index) => {
		const currentObjectKeys = Object.keys(el);

		for (const key in requiredPropertiesType) {
			if (!el[key]) {
				errors.push(
					new Error(
						`There is missing property ${key} on index: ${index}`
					)
				);
			} else {
				if (typeof el[key] != requiredPropertiesType[key]) {
					errors.push(
						new Error(
							`${key} should be type ${requiredPropertiesType[key]} on index: ${index}`
						)
					);
				}

				const keyIndex = currentObjectKeys.indexOf(key);
				currentObjectKeys.splice(keyIndex, 1);
			}
		}
		currentObjectKeys.forEach((el) =>
			errors.push(
				new Error(
					`There is additional field - ${el} which have to be removed on index: ${index}`
				)
			)
		);
	});

	if (errors.length) {
		errors.forEach((el) => console.log(el));
	}
};

validateJson(data);

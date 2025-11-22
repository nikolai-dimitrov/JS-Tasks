data = [1, 2];
const myPromise = new Promise((resolve, reject) => {
	if (data.length < 3) {
		resolve(data);
	} else {
		reject("Too much data");
	}
});
const dataObj = {
	1: "Ivan",
	2: "John",
};
const getAsyncData = (id) => {
	return new Promise((resolve, reject) => {
		if (dataObj[id]) {
			resolve(dataObj[id]);
		} else {
			reject("No such id!");
		}
	});
};

const getData = async () => {
	try {
		// const d = await myPromise;
		// console.log(d);
		const d = await getAsyncData(1);
		console.log(d);
	} catch (error) {
		console.log(error);
	}
};

getData();

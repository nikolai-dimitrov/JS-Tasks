const storage = {
	get(key) {
		const result = localStorage.getItem(key);
		result ? JSON.parse(result) : null;
		return result
	},

	set(key, item) {
		localStorage.setItem(key, JSON.stringify(item));
	},

	clear() {
		localStorage.clear();
	},
};

storage.set("user", { name: "Bob", age: "20" });
console.log(storage.get("user"));
storage.clear()

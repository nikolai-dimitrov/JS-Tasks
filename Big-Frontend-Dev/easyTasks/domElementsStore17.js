class NodeStore {
	constructor() {
		this.store = {};
	}
	set(node, value) {
		this.store[node] = value;
	}

	get(node) {
		return this.store[node];
	}

	has(node) {
		return this.store[node] ? true : false;
	}
}

const store = new NodeStore();

store.set("div", "information about");
console.log(store.get("div"));
console.log(store.has('div'))

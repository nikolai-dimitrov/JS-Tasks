// Queue represents a "First-in, first-out" data structure in which items can be added using the "enqueue" method, and removed using the "dequeue" method. For example, if 1, 2, and 3 are added in three successive calls to "enqueue," 1 will be returned on the next call to "dequeue."
// Queue's constructor takes no arguments.
// Queue contains no static methods, and 3 prototype methods: "enqueue", "dequeue", "size."
// Queue.prototype.enqueue takes one argument of any type and adds it to the queue in O(1) time.
// Queue.prototype.dequeue takes no arguments and removes and returns the first item in the Queue in O(1) time. If no items are in the queue, this method returns undefined.
// Queue.prototype.size returns how many items are currently held in the queue in O(1) time.

class Queue {
	constructor() {
		this.map = {};
		this.len = 0;
		this.i = 0;
	}

	enqueue(item) {
		this.len += 1;
		this.map[this.i] = item;
		this.i += 1;
	}

	dequeue() {
		const item = this.len >= 0 ? this.map[this.i - this.len] : undefined;
		this.len > 0 ? (this.len -= 1) : (this.len = 0);

		return item;
	}

	size() {
		return this.len;
	}
}

const queue = new Queue();

queue.enqueue("1");
queue.enqueue("2");
queue.enqueue("3");

console.log(queue.size())
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.size());
queue.enqueue("4");

console.log(queue.dequeue());
console.log(queue.size());

queue.len = 20
console.log(queue.size());

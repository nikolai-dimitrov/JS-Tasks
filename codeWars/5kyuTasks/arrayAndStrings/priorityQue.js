// addGift (or enqueue) adds a gift to the priority queue. This method should accept one object (or hash in ruby), which has two properties: gift - the name of the gift, and priority - the priority of the gift, and should return the new length of the queue. All gifts will be in this form.
// buyGift (or dequeue) removes the gift with the highest priority from the priority queue, and returns the gifts name (value of the gift property). If the queue is empty, return the empty string ''
// Solution without .sort()

class HolidayPriorityQueue {
	constructor() {
		this.priorityQue = [];
		this.lastElPriority = Infinity;
	}
	addGift(gift) {
		if (this.priorityQue.length == 0) {
			this.priorityQue.push(gift);
			this.lastElPriority = gift.priority;
			return this.priorityQue.length;
		}

		let index = this.priorityQue.findLastIndex(
			(el) => el.priority <= gift.priority
		);

		if (index == -1) {
			this.priorityQue.unshift(gift);
		} else {
			this.priorityQue.splice(index + 1, 0, gift);
		}

		return this.priorityQue.length;
	}

	buyGift() {
		return this.priorityQue.length != 0
			? this.priorityQue.shift().gift
			: "";
	}
}

const giftList = new HolidayPriorityQueue();
console.log(giftList.addGift({ gift: "Water gun", priority: 200 }));

console.log(giftList.addGift({ gift: "Water gun", priority: 1 }));
console.log(giftList.addGift({ gift: "Toy truck2", priority: 100 }));
console.log(giftList.addGift({ gift: "Toy truck1", priority: 0 }));
console.log(giftList.addGift({ gift: "Toy truck", priority: 4 }));
console.log(giftList.addGift({ gift: "Water gun", priority: 7 }));

console.log(giftList.addGift({ gift: "Toy truck0", priority: 3 }));
console.log(giftList.addGift({ gift: "Toy truck1", priority: 5 }));
console.log(giftList.addGift({ gift: "Water gun1", priority: 7 }));
console.log(giftList.buyGift());

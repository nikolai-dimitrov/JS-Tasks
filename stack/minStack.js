class Stack {
	minNum = null;

	constructor(nums) {
		this.nums = nums;
	}

	push = (num) => {
		this.nums.push(num);
		this.getMin(num);
	};

	pop = (num) => {
		this.nums.pop(num);
		this.getMin();
	};

	getMin = (num) => {
		if (this.minNum && num) {
			if (num <= this.minNum) {
				this.minNum = num;
				console.log(this.minNum);
				return;
			} else {
				console.log(this.minNum);
				return;
			}
		} else {
			const stack = [];

			for (let i = 0; i < this.nums.length; i++) {
				const currentNum = this.nums[i];

				while (stack.length && currentNum <= stack[stack.length - 1]) {
					stack.pop();
				}

				if (currentNum >= stack[stack.length - 1]) {
					continue;
				}

				stack.push(currentNum);
			}

			this.minNum = stack[0];
			console.log(this.minNum);
			return;
		}
	};
}

const stack = new Stack([11, 1, 2, 7, 8, -1, 6, -10, -1]);
const stack1 = new Stack([-100, 20, 500]);
const stack2 = new Stack([]);

stack2.getMin()

// stack.push(6000)
stack.pop()
// stack.pop()
// stack.pop()




const nums = [5, 3, 2, 10, 100, 1, 0];

nums.sort((a, b) => a - b);

console.log(nums);

const names = ["Charlie", "Alice", "John"];

names.sort((a, b) => b.localeCompare(a));

console.log(names);

const students = [
	{ name: "Ivan", age: 20 },
	{ name: "Anna", age: 22 },
	{ name: "Boris", age: 19 },
];

students.sort((a, b) => a.age - b.age);
console.log(students);

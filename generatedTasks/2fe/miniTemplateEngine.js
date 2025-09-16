const template = "Hello, {{name}}! You are {{age}} years old.";
const data = { name: "Alice", age: 25 };

const template1 =
	"I am from: {{city}}, and i am {{name}}! You are {{age}} years old.";
const data1 = { name: "Alice", age: 25, city: "Sofia" };

const render = (template, data) => {
	Object.keys(data).forEach((key) => {
		template = template.replaceAll(`{{${key}}}`, data[key]);
	});

	console.log(template);
};

render(template, data);
render(template1, data1);

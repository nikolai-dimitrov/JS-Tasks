let data = [];
const createTodoInput = document.querySelector("#root > div > input");
const radioBtnsContainer = document.querySelector(".radioBtnsContainer");
const addButton = document.querySelector("#root > div > button");
const todoList = document.querySelector("#root section ul");

const updateLocalStorage = () => {
	localStorage.setItem("todoes", JSON.stringify(data));
};

const renderTodo = (todo) => {
	const todoContainer = document.createElement("li");

	const todoText = document.createElement("p");
	todoText.textContent = todo.text;
	todo.checked && todoText.classList.add("lineThrough");

	const checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.checked = todo.checked;
	checkBox.addEventListener("change", (e) => checkTodoHandler(e, todo.id));

	const removeBtn = document.createElement("button");
	removeBtn.textContent = "Remove";
	removeBtn.addEventListener("click", (e) => deleteTodoHandler(e, todo.id));

	const actionsContainer = document.createElement("div");

	actionsContainer.append(checkBox, removeBtn);
	todoContainer.append(todoText, actionsContainer);

	todoList.appendChild(todoContainer);
};

const deleteTodoHandler = (e, id) => {
	data = data.filter((todo) => todo.id != id);
	updateLocalStorage();

	e.target.parentElement.parentElement.remove();
};

const addTodoHandler = () => {
	let todoText = createTodoInput.value;
	const isTodoExists = data.find((el) => el.text == todoText);

	if (todoText.length == 0) {
		todoText = prompt("Add todo title please");
		if (todoText.length == 0) {
			return;
		}
	}

	if (isTodoExists) {
		alert(`There is already existing todo with this title: ${todoText}`);
		return;
	}

	const todoValues = {
		id: data[data.length - 1]?.id + 1 || 1,
		text: todoText,
		checked: false,
	};

	data.push(todoValues);

	updateLocalStorage();
	renderTodo(todoValues);

	createTodoInput.value = "";
};

const checkTodoHandler = (e, id) => {
	const todo = data.find((el) => el.id == id);
	todo.checked = !todo.checked;

	const todoTextParagraph = e.target.parentElement.previousSibling;

	todo.checked
		? todoTextParagraph.classList.add("lineThrough")
		: todoTextParagraph.classList.remove("lineThrough");

	filterTodosHandler(e, id);
	updateLocalStorage(data);
};

const filterTodos = (filterBy, todos, id) => {
	let filteredTodos = todos.filter((todo) => {
		if (filterBy == "checked") {
			return id
				? todo.id != id && todo.checked == true
				: todo.checked == true;
		}
		if (filterBy == "unchecked") {
			return id
				? todo.id != id && todo.checked == false
				: todo.checked == false;
		}
		return true;
	});

	return filteredTodos;
};

const filterTodosHandler = () => {
	let filterBy = null;

	document.querySelectorAll(".radioBtnsContainer input").forEach((el) => {
		if (el.checked == true) {
			filterBy = el.id;
		}
	});

	const filteredTodos = filterTodos(filterBy, data);

	loadTodos(filteredTodos);
};

const loadTodos = (data = data, initialLoad = false) => {
	todoList.innerHTML = "";
	if (data.length == 0 && initialLoad) {
		const todoes = localStorage.getItem("todoes");
		if (todoes) {
			data.push(...JSON.parse(todoes));
		}
	}

	data.forEach((todo) => {
		renderTodo(todo);
	});
};

addButton.addEventListener("click", addTodoHandler);
radioBtnsContainer.addEventListener("change", filterTodosHandler);

loadTodos(data, true);

const ulTodoTasksContainer = document.getElementById("todos");
const ulDoneTasksContainer = document.getElementById("done");

ulDoneTasksContainer.classList.add("dropzone");
ulDoneTasksContainer.style.height = "200px"

let draggedElement = null;


const dragStartHandler = (event) => {
	draggedElement = event.target;
};

const dragOverHandler = (event) => {
	event.preventDefault();
};

const dropHandler = (event) => {
	if (event.target.className == "dropzone") {
		event.target.appendChild(draggedElement);
	}
};

ulTodoTasksContainer.childNodes.forEach((element) => {
	element.addEventListener("dragstart", dragStartHandler);
});

ulDoneTasksContainer.addEventListener("dragover", dragOverHandler);
ulDoneTasksContainer.addEventListener("drop", dropHandler);


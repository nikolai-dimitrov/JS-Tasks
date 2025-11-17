let users = [];
const userSection = document.querySelector("section");
const usersUl = document.querySelector("section > ul");
const reloadBtn = document.querySelector("button");
const searchInput = document.querySelector("input");

const loadUsers = async () => {
	try {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/users"
		);
		if (!response.ok) {
			throw new Error(`Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
};
const createUser = (userData) => {
	const userWrapperElement = document.createElement("li");

	const userNameElement = document.createElement("h4");
	userNameElement.textContent = userData.name;

	const userEmailElement = document.createElement("p");
	userEmailElement.textContent = userData.email;

	const userAddressElement = document.createElement("p");
	userAddressElement.textContent = userData.address.city;

	userWrapperElement.append(
		userNameElement,
		userEmailElement,
		userAddressElement
	);

	return userWrapperElement;
};

const renderUsers = (users) => {
	usersUl.innerHTML = "";

	const fragment = document.createDocumentFragment();

	users.forEach((userData) => {
		const userLiElement = createUser(userData);
		fragment.appendChild(userLiElement);
	});

	usersUl.appendChild(fragment);
};

const startApp = async () => {
	try {
		users = await loadUsers();
		renderUsers(users);
	} catch (error) {
		alert("Something went wrong.");
	}
};

const handleReloadBtnClick = () => {
    searchInput.value = ''
	startApp();
};

const handleSearchInputKeyup = async (e) => {
	const filteredUsers = await debouncedFilter(e, users);
	renderUsers(filteredUsers);
};

const debounce = (func) => {
	let timeoutId = null;

	return (...args) => {
		return new Promise((resolve) => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				resolve(func(...args));
			}, 500);
		});
	};
};

const filterUsers = (e, users) => {
	const filteredUsers = users.filter((user) =>
		user.name.toLowerCase().includes(e.target.value.toLowerCase())
	);
	return filteredUsers;
};

const debouncedFilter = debounce(filterUsers);

reloadBtn.addEventListener("click", handleReloadBtnClick);
searchInput.addEventListener("keyup", handleSearchInputKeyup);
startApp();

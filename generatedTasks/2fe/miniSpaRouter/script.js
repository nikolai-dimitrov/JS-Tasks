const appSection = document.getElementById("app");

const navElement = document.querySelector("nav");

const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const productsSection = document.getElementById("products");

homeSection.remove();
aboutSection.remove();
productsSection.remove();

const homeView = () => {
	appSection.replaceChildren(homeSection);
};

const aboutView = () => {
	appSection.replaceChildren(aboutSection);
};

const productsView = () => {
	appSection.replaceChildren(productsSection);
};

const viewsMapper = {
	homeAnchor: homeView,
	aboutAnchor: aboutView,
	productsAnchor: productsView,
};

const changeViewHandler = (event) => {
	console.log(event.target.tagName);
	if (event.target.tagName === "A") {
		const view = viewsMapper[event.target.id];
		view();
	}
};

homeView();

navElement.addEventListener("click", changeViewHandler);

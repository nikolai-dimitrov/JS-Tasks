import { data } from "./data.js";
const imagesContainer = document.querySelector("ul");
const modalElement = document.querySelector(".modal");
const modalImage = document.querySelector(".modal img");
const overlayElement = document.querySelector(".overlay");
const closeModalButton = document.querySelector(".modal > button");
const modalButtonsContainer = document.querySelector(
	".modal .buttonsContainer"
);
const previousButton = document.querySelector(
	".buttonsContainer button:nth-child(1)"
);
const nextButton = document.querySelector(
	".buttonsContainer button:nth-child(2)"
);

let openedImage = {
	index: null,
	id: null,
};

const updateNavigationButtons = (imageIndex) => {
	previousButton.disabled = false;
	nextButton.disabled = false;

	if (data.length - 1 == 0) {
		previousButton.disabled = true;
		nextButton.disabled = true;
	} else if (imageIndex == 0) {
		previousButton.disabled = true;
	} else if (imageIndex == data.length - 1) {
		nextButton.disabled = true;
	}
};

const showImageModalHandler = (e) => {
	if (e.target.tagName == "IMG") {
		modalElement.classList.remove("hidden");
		overlayElement.classList.remove("hidden");

		modalImage.src = e.target.src;
		modalImage.id = e.target.id;

		if (openedImage.id != e.target.id) {
			openedImage.id = e.target.id;
			openedImage.index = data.findIndex((el) => el.id == e.target.id);
		}

		updateNavigationButtons(openedImage.index);
	}
};

const changeImageHandler = (e) => {
	if (e.target.tagName == "BUTTON") {
		const currentImage = document.querySelector(".modalContent img");
		if (currentImage.id < data.length && e.target.textContent == "Next") {
			openedImage.index += 1;
		} else if (currentImage.id > 1 && e.target.textContent == "Previous") {
			openedImage.index -= 1;
		}

		currentImage.src = data[openedImage["index"]].imageUrl;
		currentImage.id = data[openedImage["index"]].id;

		updateNavigationButtons(openedImage.index);
	}
};

const createImageElement = (image) => {
	const imageElement = document.createElement("img");
	imageElement.src = image.imageUrl;
	imageElement.id = image.id;
	imageElement.classList.add("loading");

	imageElement.addEventListener("load", (e) => {
		imageElement.classList.remove("loading");
	});

	const imageWrapperElement = document.createElement("li");
	imageWrapperElement.appendChild(imageElement);

	return imageWrapperElement;
};
const loadImages = () => {
	data.forEach((image) => {
		const imageElement = createImageElement(image);
		imagesContainer.appendChild(imageElement);
	});
};

const closeModalHandler = (e) => {
	if ((e.type == "keydown" && e.key == "Escape") || e.type == "click") {
		modalElement.classList.add("hidden");
		overlayElement.classList.add("hidden");
	}
};

closeModalButton.addEventListener("click", closeModalHandler);
overlayElement.addEventListener("click", closeModalHandler);
window.addEventListener("keydown", closeModalHandler);

modalButtonsContainer.addEventListener("click", changeImageHandler);
imagesContainer.addEventListener("click", showImageModalHandler);

loadImages();

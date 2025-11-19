import { data } from "./data.js";
const imagesContainer = document.querySelector("ul");
const modalElement = document.querySelector(".modal");
const modalImage = document.querySelector(".modal img");
const closeModalButton = document.querySelector(".modal > button");
const modalButtonsContainer = document.querySelector(
	".modal .buttonsContainer"
);
let openedImage = {
	index: null,
	id: null,
};

const updateNavigationButtons = () => {
	const currentImage = document.querySelector(".modalContent img");
	const imageIndex = data.findIndex((el) => el.id == currentImage.id);
	if (imageIndex == data.length - 1) {
		console.log("disable next");
	} else if (imageIndex == 0) {
		console.log("disable previous");
	}
};

const showImageModalHandler = (e) => {
	if (e.target.tagName == "IMG") {
		modalElement.classList.remove("hidden");

		modalImage.src = e.target.src;
		modalImage.id = e.target.id;

		if (openedImage.id != e.target.id) {
            openedImage.id = e.target.id;
			openedImage.index = data.findIndex((el) => el.id == e.target.id);
		}

		updateNavigationButtons();
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
	}
};

const createImageElement = (image) => {
	const imageElement = document.createElement("img");
	imageElement.src = image.imageUrl;
	imageElement.id = image.id;
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

closeModalButton.addEventListener("click", () => {
	modalElement.classList.add("hidden");
});
modalButtonsContainer.addEventListener("click", changeImageHandler);
imagesContainer.addEventListener("click", showImageModalHandler);

loadImages();

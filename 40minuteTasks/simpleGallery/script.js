import { data } from "./data.js";
const imagesContainer = document.querySelector("ul");

const showImageModal = (e) => {
	if (e.target.tagName == "IMG") {
	}
};
const createImageElement = (image) => {
	const imageElement = document.createElement("img");
	imageElement.src = image.imageUrl;
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

imagesContainer.addEventListener("click", showImageModal);
loadImages();

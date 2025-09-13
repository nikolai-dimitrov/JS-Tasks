const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const productInput = document.querySelector("input");
const productUl = document.querySelector("ul");

const products = ["Shirt", "Pants"];

const renderProducts = () => {
	products.forEach((product) => {
		const productLi = document.createElement("li");
		productLi.textContent = product;
		productUl.appendChild(productLi);
	});
};

const addProductHandler = () => {
	if (productInput.value != "") {
		products.push(productInput.value);

		const productLi = document.createElement("li");
		productLi.textContent = productInput.value;
		productUl.appendChild(productLi);

		productInput.value = "";
	}
};

const removeProductHandler = () => {
	if (products) {
		products.pop();
	}

	productUl.lastChild?.remove();
};

addBtn.addEventListener("click", addProductHandler);
removeBtn.addEventListener("click", removeProductHandler);
renderProducts();

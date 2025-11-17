const form = document.querySelector("form");
const submitButton = document.querySelector("button");

const renderErrors = (formValues, formErrors) => {
	for (const key in formValues) {
		let errorParagraph = document
			.getElementById(key)
			.parentElement.querySelector("p");

		if (formErrors[key]) {
			if (errorParagraph) {
				errorParagraph.textContent = formErrors[key];
				continue;
			}

			errorParagraph = document.createElement("p");
			errorParagraph.textContent = formErrors[key];
			errorParagraph.classList.add("errorMessage");

			const divElement = document.getElementById(key).parentElement;
			divElement.appendChild(errorParagraph);
		} else {
			if (errorParagraph) {
				errorParagraph.remove();
			}
		}
	}
};

const validators = {
	validateEmptyFields: (value) =>
		value.length != 0 ? false : "This field is required!",
	validatePasswordMatch: (password, repeatPassword) =>
		password == repeatPassword ? false : "Password does not match!",
	validatePasswordLen: (password) =>
		password.length >= 6 ? false : "Password must contain minimum 6 chars!",
};

const validateForm = (formValues) => {
	const formErrors = {};

	for (const key in formValues) {
		let errorMessage = null;
		const value = formValues[key];

		errorMessage = validators.validateEmptyFields(value);

		if ((key == "password" || key == "repeatPassword") && !errorMessage) {
			errorMessage = validators.validatePasswordLen(value);
		}

		if (errorMessage) {
			formErrors[key] = errorMessage;
		}
	}

	if (!formErrors["repeatPassword"]) {
		let errorMessage = validators.validatePasswordMatch(
			formValues["password"],
			formValues["repeatPassword"]
		);

		if (errorMessage) {
			formErrors["repeatPassword"] = errorMessage;
		}
	}

	return formErrors;
};

const onSubmitHandler = (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
	const formValues = Object.fromEntries(formData);

	const formErrors = validateForm(formValues);
	renderErrors(formValues, formErrors);

	if (Object.values(formErrors).length > 0) {
		return;
	}

	// There isn't API in the task to register user in it, but if there is send post request to API.
    alert('Successfully created user')
    e.target.reset()
    
};

form.addEventListener("submit", onSubmitHandler);

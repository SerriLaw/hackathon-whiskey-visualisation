const file = data => {
	let isValid = true;
	let validationMessage = '';

	// if exceeds max size
	if (data.maxSize && data.value && data.value.size > data.maxSize) {
		isValid = false;
		validationMessage = data.errorMessage;
	}

	if (data.isRequired && !data.value) {
		isValid = false;
		validationMessage = 'This is a required field.';
	}

	return { isValid, validationMessage };
};

export default file;

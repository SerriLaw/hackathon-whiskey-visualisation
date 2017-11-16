const input = data => {
	let isValid = true;
	let validationMessage = '';

	// if has a regex and a value, but fails validation
	if (
		data.validation &&
		data.value !== '' &&
		data.validation.test(data.value) === false
	) {
		isValid = false;
		validationMessage = data.errorMessage;
	}

	if (data.isRequired && !data.value) {
		isValid = false;
		validationMessage = 'This is a required field.';
	}

	//if max words reached
	if (
		data.maxWords &&
		data.value !== '' &&
		data.maxWords < data.value.match(/\S+/g).length
	) {
		isValid = false;
		validationMessage = `Please answer in ${data.maxWords} words or less`;
	}

	return { isValid, validationMessage };
};
export default input;

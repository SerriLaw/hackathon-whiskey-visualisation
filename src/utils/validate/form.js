import validateInput from './input';

const form = currentState => {
	let state = { ...currentState };
	state.isValid = true;

	for (const key in state.formData) {
		if (state.formData.hasOwnProperty(key) === false) {
			continue;
		}

		const validationResult = validateInput(state.formData[key]);
		state.formData[key].isValid = validationResult.isValid;
		state.formData[key].validationMessage = validationResult.validationMessage;

		// if any field is invalid, entire form is invalid
		if (validationResult.isValid === false) {
			state.isValid = false;
		}
	}

	return { ...state };
};
export default form;

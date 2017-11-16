import settings from '../../config/settings';

const getJson = async response => {
	const responseMessage = (await response.json()).message;

	if (response.status >= 200 && response.status < 300) {
		return responseMessage;
	} else {
		throw new Error(responseMessage);
	}
};

const file = async file => {
	const url = `${settings.compEngine.fileUrl}/${settings.compEngine.phaseId}`;
	const customFieldName = Object.keys(settings.compEngine.customFields).filter(
		key => settings.compEngine.customFields[key].type === 'file'
	)[0];
	const customFieldId = settings.compEngine.customFields[customFieldName].id;

	const formData = new FormData();
	formData.append(customFieldId, file, file.name);

	const response = await fetch(url, {
		method: 'POST',
		body: formData
	});

	return getJson(response);
};

export default file;

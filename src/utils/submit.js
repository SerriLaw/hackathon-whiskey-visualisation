import settings from '../config/settings';
import standardCustomFields from './custom-fields';
import fileCustomFields from './file/custom-fields';
import { getToken } from './sso';

const getJson = async response => {
	const responseMessage = (await response.json()).message;

	if (response.status >= 200 && response.status < 300) {
		return responseMessage;
	} else {
		throw new Error(responseMessage);
	}
};

const form = async (formData, filenames) => {
	const url = `${settings.compEngine.formUrl}/${settings.compEngine.phaseId}`;

	const formattedData = {
		...Object.keys(formData).reduce((reduced, current) => {
			reduced[current] = formData[current].value;
			return reduced;
		}, {}),
		ssoClientId: settings.sso.clientId,
		ssoToken: await getToken(),
		customFields: [
			...standardCustomFields(formData),
			...fileCustomFields(filenames)
		]
	};

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formattedData)
	});

	return getJson(response);
};

export default form;

import settings from '../../config/settings';

const format = filenames => {
	let customFields = [];
	for (const key in settings.compEngine.customFields) {
		if (
			settings.compEngine.customFields.hasOwnProperty(key) === false ||
			settings.compEngine.customFields[key].type !== 'file'
		) {
			continue;
		}

		customFields.push({
			id: settings.compEngine.customFields[key].id,
			type: 'text',
			value: filenames[0].value
		});
	}

	return customFields;
};

export default format;

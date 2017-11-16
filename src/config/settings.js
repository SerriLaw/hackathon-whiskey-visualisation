import settings from './settings.json';
const location = window.location;

const getEnvironment = () => {
	const subdomain = location.hostname.split('.')[0];
	if (subdomain === 'localhost') return subdomain;

	const parts = subdomain.split('-');
	return parts[parts.length - 1];
};

const getSettings = () => {
	let env = getEnvironment();

	if (settings.hasOwnProperty(env) === false) {
		env = 'prod';
	}

	return {
		...settings.default,
		...settings[env],
		env
	};
};

export default getSettings();

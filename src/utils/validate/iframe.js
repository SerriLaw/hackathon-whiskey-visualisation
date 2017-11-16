import settings from '../../config/settings';
const self = window.self;
const top = window.top;

const isIframe = () => {
	try {
		return self !== top;
	} catch (e) {
		return true;
	}
};

const allowedDomain = () => {
	var matches = document.referrer.match(/^https?:\/\/([^/:?#]+)(?:[/:?#]|$)/i);

	var domain = matches && matches[1];

	return settings.allowedDomains.indexOf(domain) !== -1;
};

const validate = path => {
	if (isIframe()) {
		if (allowedDomain()) {
			return true;
		}
		return false;
	}
	return true;
};

export { isIframe };
export default validate;

import getCookie from '../cookie';
const document = window.document;

const createReentryCookie = (
	email,
	phaseId,
	reentryAvailable,
	reentryAfter
) => {
	if (reentryAvailable && reentryAfter === undefined) {
		return;
	}

	if (reentryAfter === undefined || reentryAfter === null) {
		reentryAfter = new Date();
		reentryAfter.setUTCFullYear(reentryAfter.getUTCFullYear() + 1);
	}

	const expires = reentryAfter
		? '; expires=' + new Date(reentryAfter).toUTCString()
		: '';
	const name = email + phaseId + '=false';
	document.cookie = name + expires + '; path=/';
};

const isEntryAvailable = (email, phaseId) => {
	const name = email + phaseId;
	const value = getCookie(name);
	return value === '';
};

export default { createReentryCookie, isEntryAvailable };

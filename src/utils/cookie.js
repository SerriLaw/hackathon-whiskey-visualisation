const document = window.document;

const get = name => {
	try {
		const nameEQ = `${name}=`;
		const cookies = document.cookie.split(';');

		for (let i = 0; i < cookies.length; i++) {
			let cookie = cookies[i];

			// read cookie, ignoring leading spaces
			while (cookie.charAt(0) === ' ') {
				cookie = cookie.substring(1, cookie.length);
			}

			if (cookie.indexOf(nameEQ) === 0) {
				return cookie.split('=')[1];
			}
		}
	} catch (error) {
		return '';
	}

	return '';
};

export default get;

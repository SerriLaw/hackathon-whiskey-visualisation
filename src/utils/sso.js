import NineSSO from 'mi9-sso-sdk';
import settings from '../config/settings';

const sso = new NineSSO(settings.sso);

const getUser = () => {
	return new Promise((resolve, reject) => {
		sso.getSettings((err, userData) => {
			if (err && err.code === NineSSO.ERROR_UNAUTHENTICATED) {
				resolve({ isLoggedIn: false });
			} else if (err) {
				reject(err);
			} else {
				resolve({
					isLoggedIn: true,
					userData
				});
			}
		});
	});
};

const getToken = () => {
	return new Promise((resolve, reject) => {
		sso.getToken((err, token) => {
			if (err) {
				reject(err);
			} else {
				resolve(token);
			}
		});
	});
};

export { getUser, getToken };

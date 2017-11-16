import settings from '../../config/settings';
import cookie from './cookie';

const reentry = email => {
	if (cookie.isEntryAvailable(email, settings.compEngine.phaseId) === false) {
		return false;
	}

	return true;
};

export default reentry;

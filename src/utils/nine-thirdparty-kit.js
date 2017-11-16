import settings from '../config/settings';

const config = window.NINEAU_Config;
const thirdParty = window.NINEAU_ThirdParty;

const initialize = () => {
	const {
		omnitureSuiteId,
		category,
		siteName,
		sectionName,
		nielsenEnabled
	} = settings.tracking;

	config.setOmnitureSuiteId(omnitureSuiteId);
	config.setCategory(category);
	config.setSiteName(siteName);
	config.setSectionName(sectionName);
	config.setNielsenEnabled(nielsenEnabled);

	thirdParty.initialize();
	thirdParty.renderTracking();
};

const trackClick = linkName => {
	if (settings.tracking.enabled === false) {
		return;
	}

	thirdParty.trackClick(`${settings.tracking.sectionName}-${linkName}`);
};

const trackPage = page => {
	if (settings.tracking.enabled === false) {
		return;
	}

	config.setSubsectionName(page);
};

export default { initialize, trackClick, trackPage };

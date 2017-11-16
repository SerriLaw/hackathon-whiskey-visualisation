This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Getting Started

* you’ll need to have Node >= 6 on your machine
* (optional) install yarn (npm install -g yarn)
* install project dependencies (npm install / yarn install)
* run the project (npm start / yarn start)
* some basic tests are also included (npm test / yarn test)


## Configuration
Most project configuration takes place in config/settings.json. Some additional UI specific configuration is in components/form/index.js

### Settings
* default settings are used for all environments and can be overridden at the environment level
* allowedDomains - domains we allow iframe the campaign
* nineThirdPartyKit - url for nine header and footer
* tracking can be used to turn tracking off (default is on)
* iframeUrl - competition url if it is to sit in an iframe
* compEngine
	* phaseId, required
	* formUrl, required
	* fileUrl, optional, required for file upload type comps
	* customFields
		* each key (property name) must match a key in form/index.js custom field settings
		* type must be either text, bool, multi or file
* sso - sso settings

### Form
* state.formData is what will be submitted to the comp engine
* each key (property name) should match a database field (see comp-api readme) or a corresponding custom field key as outlined above (Settings)
* each property needs an initial value and an isValid flag set to true
* each property can be marked as required
* each property can have a validation attribute (regex), an errorMessage is required if validation is present
* if the property refers to a **file**, a maxSize attribute can be supplied, an errorMessage is required if maxSize is present


## Removing Items
This template is created to include most items required of a typical competition campaign. For most campaigns you will need to remove some parts. This is a guide to doing that

### Removing file upload
* utils/file
	* remove folder
* submit/index
	* remove submitFile()
* utils/submit
	* remove fileCustomFields()

### Removing SSO
* utils/sso
	* remove file
* home/index
	* remove try/catch from componendDidMount()
	* remove sso comopnents from render()
* utils/submit
	* remove getToken()
* pages/login
	* remove folder
* components/sso-callback
	* remove folder
* components/sso-logged-in
	* remove folder

### Removing re-entry limitation
* utils/reentry
	* remove folder
* submit/index
	* remove createReentryCookie & isEntryAvailable
* home/index
	* remove validateReentry & isEntryAvailable
* form/index
	* remove isEntryAvailable

## Project Overview

The project is set up so there are 2 root level folder we use: public and src. Almost everything should be done in src, but the template page and the favicon is in public. The template page also contains some code related to tracking

In source, there are 4 folders: components, config, pages and utils. There are also 2 files, index.js and index.css - index.js should (probably) not be changed, index.css is where any top level css should go

The config folder contains all the campaign config in the settings.json file, settings.js is used to determine what env we are on and select the appropriate config. Most likely only settings.json should change.

The utils folder is used for any javascript that is used on multiple pages

Components and Pages are somewhat similar. Components are the reusable bits that make up the pages, pages are the pages themselves.

Within Pages there is a file called router.js which does the routing of pages, with everything not explicitly configured defaulting to home ("/"). There is also a folder called layout, this is the start of what would be displayed on the page. There is a header and footer, with a tag called router in between. Header and footer refer to the header and footer components within the component folder, while router refers to the router.js file, which in turn displays the relevant page. The other folders within Pages (error, home etc) are the pages themselves.

Components are very similar to Pages, but they represent the bits of pages rather than the overall page.
import React from 'react';

const LoggedIn = ({ firstName, lastName }) =>
	<div className="logged-in-text">
		You're signed in as&nbsp;
		{firstName}&nbsp;
		{lastName}. Complete your entry below.
	</div>;
export default LoggedIn;

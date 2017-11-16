import React from 'react';
import { Redirect, Switch, withRouter } from 'react-router-dom';
import ScrollTopRoute from '../components/scroll-top-route';
import settings from '../config/settings';
import validateIframe from '../utils/validate/iframe';
import HomePage from './home';
import LoginPage from './login';
import ThanksPage from './thanks';
import ClosedPage from './closed';
import IframePage from './iframe';
import ErrorPage from './error';

const isClosed = path => {
	const now = new Date().getTime();
	const isClosed = now >= settings.closedEpoch * 1000;
	const alreadyRedirected = path === '/closed';

	return isClosed && alreadyRedirected === false;
};

const isInvalidIframe = path => {
	const alreadyRedirected = path === '/iframe';

	return (alreadyRedirected || validateIframe(path)) === false;
};

const AppRouter = props => {
	if (isInvalidIframe(props.location.pathname)) {
		return <Redirect to="/iframe" />;
	}

	if (isClosed(props.location.pathname)) {
		return <Redirect to="/closed" />;
	}

	return (
		<Switch>
			<ScrollTopRoute exact path="/" component={HomePage} />
			<ScrollTopRoute exact path="/login" component={LoginPage} />
			<ScrollTopRoute
				exact
				path="/logged-in"
				component={props => <HomePage isSsoCallback="true" {...props} />}
			/>
			<ScrollTopRoute exact path="/thanks" component={ThanksPage} />
			<ScrollTopRoute exact path="/closed" component={ClosedPage} />
			<ScrollTopRoute exact path="/error" component={ErrorPage} />
			<ScrollTopRoute exact path="/iframe" component={IframePage} />
			<ScrollTopRoute to="/" component={HomePage} />
		</Switch>
	);
};
export default withRouter(AppRouter);

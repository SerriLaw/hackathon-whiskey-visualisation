import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import ScrollTopRoute from '../components/scroll-top-route';
import HomePage from './home';
import ErrorPage from './error';
import WhiskeyVisPage from './whiskeyVis';

const AppRouter = props => {
	return (
		<Switch>
			<ScrollTopRoute exact path="/" component={HomePage} />
			<ScrollTopRoute exact path="/whiskey-charts" component={WhiskeyVisPage} />
			<ScrollTopRoute exact path="/error" component={ErrorPage} />
			<ScrollTopRoute to="/" component={HomePage} />
		</Switch>
	);
};
export default withRouter(AppRouter);

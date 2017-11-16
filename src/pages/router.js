import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import ScrollTopRoute from '../components/scroll-top-route';
import HomePage from './home';
import MapPage from './map';
import ErrorPage from './error';

const AppRouter = props => {
	return (
		<Switch>
			<ScrollTopRoute exact path="/" component={HomePage} />
			<ScrollTopRoute exact path="/map" component={MapPage} />
			<ScrollTopRoute exact path="/error" component={ErrorPage} />
			<ScrollTopRoute to="/" component={HomePage} />
		</Switch>
	);
};
export default withRouter(AppRouter);

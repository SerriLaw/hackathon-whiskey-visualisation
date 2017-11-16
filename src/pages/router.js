import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import ScrollTopRoute from '../components/scroll-top-route';
import HomePage from './home';
import MapPage from './map';
import ErrorPage from './error';
import WhiskeyRatings from './whiskey-ratings';
import WhiskeyColors from './whiskey-colors';
import WhiskeyTasteProfile from './whiskey-taste-profile';

const AppRouter = props => {
	return (
		<Switch>
			<ScrollTopRoute exact path="/" component={HomePage} />
			<ScrollTopRoute exact path="/map" component={MapPage} />
			<ScrollTopRoute
				exact
				path="/whiskey-ratings"
				component={WhiskeyRatings}
			/>
			<ScrollTopRoute exact path="/whiskey-colors" component={WhiskeyColors} />
			<ScrollTopRoute
				exact
				path="/whiskey-taste-profile"
				component={WhiskeyTasteProfile}
			/>
			<ScrollTopRoute exact path="/error" component={ErrorPage} />
			<ScrollTopRoute to="/" component={HomePage} />
		</Switch>
	);
};
export default withRouter(AppRouter);

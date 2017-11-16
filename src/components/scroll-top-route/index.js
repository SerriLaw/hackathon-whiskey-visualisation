import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { isIframe } from '../../utils/validate/iframe';

const scrollTo = window.scrollTo;
const postMessage = window.parent.postMessage;

class ScrollTopRoute extends Component {
	componentDidMount(prevProps) {
		try {
			if (isIframe()) {
				postMessage('scrollTop', '*');
			} else {
				scrollTo(0, 0);
			}
		} catch (exception) {
			/* swallow exception */
		}
	}

	render() {
		const { component: Component, ...rest } = this.props;

		return <Route {...rest} render={props => <Component {...props} />} />;
	}
}

export default ScrollTopRoute;

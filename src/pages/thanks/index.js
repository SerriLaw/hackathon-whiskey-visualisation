import React, { Component } from 'react';
import NineThirdPartyKit from '../../utils/nine-thirdparty-kit';

class ThanksPage extends Component {
	componentDidMount() {
		NineThirdPartyKit.trackPage(this.props.history.location.pathname);
	}

	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h2>ThanksPage page</h2>
				<div>
					{JSON.stringify(this.props)}
				</div>
			</div>
		);
	}
}
export default ThanksPage;

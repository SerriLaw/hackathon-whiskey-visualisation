import React, { Component } from 'react';
import NineThirdPartyKit from '../../utils/nine-thirdparty-kit';
import settings from '../../config/settings';
import './style.css';

const topHref = window.document.referrer;
const iframeHref = window.self.location.href;

class IframePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			redirectUrl: `${settings.iframeUrl
				? settings.iframeUrl
				: iframeHref.replace('iframe', '')}?referrer=${topHref}`
		};
	}

	componentDidMount() {
		NineThirdPartyKit.trackPage(this.props.history.location.pathname);
	}

	render() {
		return (
			<div id="invalid-iframe">
				<h4>Please click on the link below if not automatically redirected</h4>

				<h2>
					<a
						className="btn"
						onClick={() =>
							NineThirdPartyKit.trackClick(
								`iframe-redirect?referrer=${topHref}`
							)}
						href={this.state.redirectUrl}
						target="_top"
					>
						Go to competition
					</a>
				</h2>
			</div>
		);
	}
}
export default IframePage;

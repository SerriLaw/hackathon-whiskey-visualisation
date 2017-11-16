import React, { Component } from 'react';
import NineThirdPartyKit from '../../utils/nine-thirdparty-kit';
import './style.css';

class ClosedPage extends Component {
	componentDidMount() {
		NineThirdPartyKit.trackPage(this.props.history.location.pathname);
	}

	render() {
		return (
			<div id="closed">
				<div>
					Congratulations to the winner <br />
					A.BLACK, NSW
				</div>
				<br />
				<a id="goBtn" className="btn" href="https://www.nine.com.au/">
					Go to nine.com.au
				</a>
				<br />
				<br />
			</div>
		);
	}
}
export default ClosedPage;

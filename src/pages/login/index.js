import React, { Component } from 'react';
import RedCarpet from '../../components/red-carpet';
import settings from '../../config/settings';
import './styles.css';
import signup from './img/signup.png';
import login from './img/login.png';
import NineThirdPartyKit from '../../utils/nine-thirdparty-kit';

class LoginPage extends Component {
	componentDidMount() {
		NineThirdPartyKit.trackPage(this.props.history.location.pathname);
		console.log('tracking login');
	}

	render() {
		return (
			<div id="not-logged-in-intro" className="view">
				<div className="textWrapper">
					<p>
						To enter, simply log into your Nine account, <br />fill in your
						details and show us your outfit.
					</p>
				</div>
				<div id="sso-buttons">
					<a
						id="signup-redirect"
						onClick={() => NineThirdPartyKit.trackClick('signup')}
						href={`${settings.sso
							.loginService}/signup/local?client_id=${settings.sso.clientId}`}
					>
						<img src={signup} alt="sign up" />
					</a>
					<a
						id="login-redirect"
						onClick={() => NineThirdPartyKit.trackClick('login')}
						href={`${settings.sso.loginService}/login?client_id=${settings.sso
							.clientId}`}
					>
						<img src={login} alt="login" />
					</a>
				</div>

				<RedCarpet image="man" />
			</div>
		);
	}
}
export default LoginPage;

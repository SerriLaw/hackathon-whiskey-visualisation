import React, { Component } from 'react';
import { getUser } from '../../utils/sso';
import settings from '../../config/settings';
import validateReentry from '../../utils/reentry/validate';
import Form from '../../components/form';
import SsoCallback from '../../components/sso-callback';
import SsoLoggedIn from '../../components/sso-logged-in';
import switchUser from './switch-user.png';
import './styles.css';
import NineThirdPartyKit from '../../utils/nine-thirdparty-kit';

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
			isSsoCallback: this.props.isSsoCallback || false,
			isEntryAvailable: false,
			userData: {}
		};
	}

	async componentDidMount(props) {
		try {
			NineThirdPartyKit.trackPage(this.props.history.location.pathname);

			const auth = await getUser();
			if (auth.isLoggedIn === true) {
				const isEntryAvailable = validateReentry(auth.userData.email);
				this.setState({ ...auth, isEntryAvailable });
			} else {
				this.props.history.push('/login');
			}
		} catch (error) {
			this.props.history.push('/error');
		}
	}

	render() {
		return this.state.isLoggedIn
			? <div>
					<div style={{ textAlign: 'center' }}>
						{this.state.isSsoCallback
							? <SsoCallback firstName={this.state.userData.firstName} />
							: <SsoLoggedIn {...this.state.userData} />}
						<a
							id="logout-redirect"
							onClick={() => NineThirdPartyKit.trackClick('logout')}
							href={`${settings.sso.loginService}/logout?client_id=${settings
								.sso.clientId}`}
						>
							<span>SWITCH USER</span>
							<img src={switchUser} alt="switch user" />
						</a>
					</div>

					<Form
						userData={this.state.userData}
						isEntryAvailable={this.state.isEntryAvailable}
						history={this.props.history}
					/>
				</div>
			: null;
	}
}
export default HomePage;

import React, { Component } from 'react';
import whiskies from '../../config/whiskies';
import './styles.css';

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

	render() {
		return (
			<div>
				hello world <br />
				{JSON.stringify(whiskies)}
			</div>
		);
	}
}
export default HomePage;

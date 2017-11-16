import React, { Component } from 'react';
import whiskey from '../../config/whiskey';
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
				hello tadhg <br />
				{JSON.stringify(whiskey)}
			</div>
		);
	}
}
export default HomePage;

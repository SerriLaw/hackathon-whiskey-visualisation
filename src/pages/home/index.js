import React, { Component } from 'react';
import './styles.css';
import bottle from './bottle.png';

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
			<div className="home-wrap">
				<img className="bottle-logo" src={bottle} />
			</div>
		);
	}
}
export default HomePage;

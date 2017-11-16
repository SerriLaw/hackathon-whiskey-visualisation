import React, { Component } from 'react';
// import whiskey from '../../config/whiskey';
import MyMapComponent from '../../components/map';
import './styles.css';

class MapPage extends Component {
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
			<div id="map-container">
				<h1>👋 Hello World 👋</h1>
				<MyMapComponent isMarkerShown={true} />
			</div>
		);
	}
}
export default MapPage;

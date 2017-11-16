import React, { Component } from 'react';
import whiskies from '../../config/whiskey';
import MyMapComponent from '../../components/map';
import './styles.css';

class MapPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			selectedWhiskey: null
		};
	}

	handleClick = whiskey => {
		this.setState({ showModal: true, selectedWhiskey: whiskey });
	};

	render() {
		return (
			<div id="map-container">
				<h2 id="map-text">Travelling the world, one dram at a time</h2>
				<MyMapComponent
					isMarkerShown={true}
					whiskies={whiskies}
					handleClick={this.handleClick}
				/>
				<div style={{ display: this.state.showModal }}>
					{JSON.stringify(this.state.selectedWhiskey)}
				</div>
			</div>
		);
	}
}
export default MapPage;

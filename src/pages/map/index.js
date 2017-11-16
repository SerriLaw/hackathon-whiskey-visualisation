import React, { Component } from 'react';
import whiskies from '../../config/whiskey';
import MyMapComponent from '../../components/map';
import Modal from 'react-modal';
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

	handleClose = whiskey => {
		this.setState({ showModal: false, selectedWhiskey: null });
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

				<Modal isOpen={this.state.showModal}>
					<p>{JSON.stringify(this.state.selectedWhiskey)}</p>
					<button onClick={this.handleClose}>Close</button>
				</Modal>
			</div>
		);
	}
}
export default MapPage;

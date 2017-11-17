import React, { Component } from 'react';
import whiskies from '../../config/whiskey';
import RecordsTable from '../../components/records';
import Modal from '../../components/modal';
import './styles.css';

class CollectionPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			selectedWhiskey: ''
		};
	}

	handleClick = whiskey => {
		let hexColour;
		switch (whiskey.colour) {
			case 'dark amber':
				hexColour = '#592403';
				break;
			case 'light amber':
				hexColour = '#9A4F17';
				break;
			case 'clear':
				hexColour = '#ECDCBA';
				break;
			case 'dark gold':
				hexColour = '#D98B16';
				break;
			default:
				hexColour = '#ECC03F';
				break;
		}

		this.setState({
			showModal: true,
			selectedWhiskey: { ...whiskey, hexColour }
		});
	};

	handleClose = whiskey => {
		this.setState({ showModal: false, selectedWhiskey: '' });
	};

	render() {
		return (
			<div id="map-container">
				<h2 id="map-text">Complete Collection</h2>

				<RecordsTable whiskies={whiskies} handleClick={this.handleClick} />

				<Modal
					show={this.state.showModal}
					whiskey={this.state.selectedWhiskey}
					handleClose={this.handleClose}
				/>
			</div>
		);
	}
}
export default CollectionPage;

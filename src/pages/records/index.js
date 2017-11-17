import React, { Component } from 'react';
import whiskies from '../../config/whiskey';
import RecordsTable from '../../components/records';
import Modal from 'react-modal';
import './styles.css';

const customStyles = {
	overlay: {
		height: '600px',
		width: '700px',
		margin: 'auto',
		backgroundColor: 'none'
	},
	content: {
		padding: '10px 20px 20px 20px',
		border: '3px solid #9A4F17'
	}
};

class RecordsPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			selectedWhiskey: '',
			whiskeyColor: ''
		};
	}

	render() {
		let data = this.state.selectedWhiskey;
		return (
			<div id="map-container">
				<h2 id="map-text">Travelling the world, one dram at a time</h2>

				<RecordsTable whiskies={whiskies} />
			</div>
		);
	}
}
export default RecordsPage;

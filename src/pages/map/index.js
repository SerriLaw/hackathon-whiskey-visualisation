import React, { Component } from 'react';
import whiskies from '../../config/whiskey';
import MyMapComponent from '../../components/map';
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
		border: '3px solid #9e4720'
	}
};

class MapPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			selectedWhiskey: '',
			whiskeyColor: ''
		};
	}

	handleClick = whiskey => {
		let colour;
		console.log(whiskey);
		switch (whiskey.colour) {
			case 'dark amber':
				colour = '#8D2E05';
				break;
			case 'light amber':
				colour = '#9e4720';
				break;
			case 'clear':
				colour = '#ECDCBA';
				break;
			case 'light gold':
				colour = '#f9b740';
				break;
			case 'dark gold':
				colour = '#D1790E';
				break;
		}

		this.setState({
			showModal: true,
			selectedWhiskey: whiskey,
			whiskeyColor: colour
		});
		console.log(this.state.whiskeyColor);
	};

	handleClose = whiskey => {
		this.setState({ showModal: false, selectedWhiskey: '' });
	};

	render() {
		let data = this.state.selectedWhiskey;
		return (
			<div id="map-container">
				<h2 id="map-text">Travelling the world, one dram at a time</h2>
				<MyMapComponent
					isMarkerShown={true}
					whiskies={whiskies}
					handleClick={this.handleClick}
				/>

				<Modal isOpen={this.state.showModal} style={customStyles}>
					<button className="close" onClick={this.handleClose}>
						X
					</button>
					<h2 className="data data-name">{data.name}</h2>

					<p className="data data-distillery">Distillery: {data.distillery}</p>
					<p className="data data-origin">
						Origin:{' '}
						{data.region_in_country ? data.region_in_country + ', ' : ''}
						{data.country}
					</p>
					<p className="data data-type">Type: {data.type}</p>

					<p className="data data-age">{data.age ? `Age: ${data.age}` : ''}</p>

					<div className="colorLine">
						<p className="data-colour">Colour: </p>
						<div
							className="colorSwatch"
							style={{ backgroundColor: this.state.whiskeyColor }}
						>
							&nbsp;
						</div>
						<p className="data-colour">{data.colour}</p>
					</div>

					<table className="score">
						<tr>
							<td className="data data-aroma score">Aroma</td>
							<td className="data data-taste score">Taste</td>
							<td className="data data-finish score">Finish</td>
						</tr>
						<tr>
							<td className="data data-aroma score">
								{data.rating_aroma} / 10
							</td>
							<td className="data data-taste score">
								{data.rating_taste} / 10
							</td>
							<td className="data data-finish score">
								{data.rating_finish} / 10
							</td>
						</tr>
						<tr>
							<td colSpan={3} className="data data-overall score">
								Overall
							</td>
						</tr>
						<tr>
							<td colSpan={3} className="data data-overall score">
								{data.rating_overall} / 10
							</td>
						</tr>
					</table>

					<br />
					<p className="data data-url">
						<a href={data.url}>See reviews on WhiskeyNerds.com</a>
					</p>
				</Modal>

				{/* I really need to reset state rather than a hard reload */}
				<button onClick={() => window.location.reload()}>Reset</button>
			</div>
		);
	}
}
export default MapPage;

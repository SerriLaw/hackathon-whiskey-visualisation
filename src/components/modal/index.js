import React from 'react';
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

const Footer = props => (
	<Modal isOpen={props.show} style={customStyles}>
		<button className="close" onClick={props.handleClose}>
			X
		</button>
		<h2 className="data data-name">{props.whiskey.name}</h2>

		<p className="data data-distillery">
			Distillery: {props.whiskey.distillery}
		</p>
		<p className="data data-origin">
			Origin:{' '}
			{props.whiskey.region_in_country
				? props.whiskey.region_in_country + ', '
				: ''}
			{props.whiskey.country}
		</p>
		<p className="data data-type">Type: {props.whiskey.type}</p>

		<p className="data data-age">
			{props.whiskey.age ? `Age: ${props.whiskey.age}` : ''}
		</p>

		<div className="colorLine">
			<p className="data-colour">Colour: </p>
			<div
				className="colorSwatch"
				style={{ backgroundColor: props.whiskey.hexColour }}
			>
				&nbsp;
			</div>
			<p className="data-colour">{props.whiskey.colour}</p>
		</div>

		<table className="score">
			<tr>
				<td className="data data-aroma score">Aroma</td>
				<td className="data data-taste score">Taste</td>
				<td className="data data-finish score">Finish</td>
			</tr>
			<tr>
				<td className="data data-aroma score">{props.whiskey.aroma} / 10</td>
				<td className="data data-taste score">{props.whiskey.taste} / 10</td>
				<td className="data data-finish score">{props.whiskey.finish} / 10</td>
			</tr>
			<tr>
				<td colSpan={3} className="data data-overall score">
					Overall
				</td>
			</tr>
			<tr>
				<td colSpan={3} className="data data-overall score">
					{props.whiskey.overall} / 10
				</td>
			</tr>
		</table>

		<br />
		<p className="data data-url">
			<a href={props.whiskey.url} target="_blank" onClick={props.handleClose}>
				See reviews on WhiskeyNerds.com
			</a>
		</p>
	</Modal>
);
export default Footer;

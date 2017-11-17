import React, { Component, PropTypes } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import './styles.css';
import whiskey from '../../config/whiskey.json';

class WhiskeyCountry extends Component {
	cleanData() {
		let scotland = 0;
		let ireland = 0;
		let usa = 0;
		let aus = 0;
		let japan = 0;
		let india = 0;
		let other = 0;

		whiskey.forEach(item => {
			switch (item.country) {
				case 'Scotland':
					scotland = scotland + 1;
					break;
				case 'Ireland':
					ireland = ireland + 1;
					break;
				case 'USA':
					usa = usa + 1;
					break;
				case 'Australia':
					aus = aus + 1;
					break;
				case 'Japan':
					japan = japan + 1;
					break;
				case 'India':
					india = india + 1;
					break;
				default:
					other = other + 1;
			}
		});

		const colorArray = [
			{ name: 'Scotland', Bottles: scotland, color: '#2548b4' },
			{ name: 'Ireland', Bottles: ireland, color: '#3EAD32' },
			{ name: 'Australia', Bottles: aus, color: '#012169' },
			{ name: 'USA', Bottles: usa, color: '#BF0A30' },
			{ name: 'Japan', Bottles: japan, color: '#C70025' },
			{ name: 'India', Bottles: india, color: '#ff8000' },
			{ name: 'Other', Bottles: other, color: 'purple' }
		];

		return colorArray;
	}

	constructor(props) {
		super(props);

		const cleanData = this.cleanData();
		this.state = {
			data: cleanData
		};
	}

	render() {
		const getPath = (x, y, width, height) => {
			return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y +
				height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y +
				height} ${x + width}, ${y + height}
          Z`;
		};

		const TriangleBar = props => {
			const { color, x, y, width, height } = props;

			return (
				<path d={getPath(x, y, width, height)} stroke="none" fill={color} />
			);
		};

		TriangleBar.propTypes = {
			fill: PropTypes.string,
			x: PropTypes.number,
			y: PropTypes.number,
			width: PropTypes.number,
			height: PropTypes.number
		};

		return (
			<div>
				<h2>Bottle Nationality</h2>
				<br />
				<BarChart width={1000} height={250} data={this.state.data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis type="number" domain={[0, 'dataMax + 2']} />
					<Tooltip />
					<Bar dataKey="Bottles" fill="#ccc" shape={<TriangleBar />} />
				</BarChart>
			</div>
		);
	}
}
export default WhiskeyCountry;

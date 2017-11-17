import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import './styles.css';
import whiskey from '../../config/whiskey.json';

class WhiskeyColorsPage extends Component {
	cleanData() {
		let darkAmberCount = 0;
		let lightAmberCount = 0;
		let clearCount = 0;
		let lightGoldCount = 0;
		let darkGoldCount = 0;

		whiskey.forEach(item => {
			switch (item.colour) {
				case 'dark amber':
					darkAmberCount = darkAmberCount + 1;
					break;
				case 'light amber':
					lightAmberCount = lightAmberCount + 1;
					break;
				case 'clear':
					clearCount = clearCount + 1;
					break;
				case 'light gold':
					lightGoldCount = lightGoldCount + 1;
					break;
				case 'dark gold':
					darkGoldCount = darkGoldCount + 1;
					break;
				default:
			}
		});

		const colorArray = [
			{ name: 'Light Gold', value: lightGoldCount, color: '#ECC03F' },
			{ name: 'Dark Gold', value: darkGoldCount, color: '#D98B16' },
			{ name: 'Light Amber', value: lightAmberCount, color: '#9A4F17' },
			{ name: 'Dark Amber', value: darkAmberCount, color: '#592403' },
			{ name: 'Clear', value: clearCount, color: '#ECDCBA' }
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
		return (
			<div>
				<h2>Our 5 Shades of Whiskey</h2>
				<PieChart width={1000} height={600}>
					<Pie
						data={this.state.data}
						innerRadius={100}
						outerRadius={200}
						fill="#82ca9d"
					>
						{this.state.data.map((entry, index) => <Cell fill={entry.color} />)}
					</Pie>
					<Tooltip />
					<Legend />
				</PieChart>
			</div>
		);
	}
}
export default WhiskeyColorsPage;

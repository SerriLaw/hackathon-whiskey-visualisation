import React, { Component } from 'react';
import whiskies from '../../config/whiskey.json';
import {
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';
import './styles.css';

class WhiskeyTasteProfilePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [
				{ x: 100, y: 200, z: 200 },
				{ x: 120, y: 100, z: 260 },
				{ x: 170, y: 300, z: 400 },
				{ x: 140, y: 250, z: 280 },
				{ x: 150, y: 400, z: 500 },
				{ x: 110, y: 280, z: 200 }
			]
		};
	}

	render() {
		return (
			<ScatterChart
				width={400}
				height={400}
				margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
			>
				<XAxis dataKey={'x'} type="number" name="stature" unit="cm" />
				<YAxis dataKey={'y'} type="number" name="weight" unit="kg" />
				<CartesianGrid />
				<Scatter name="A school" data={this.state.data} fill="#8884d8" />
				<Tooltip cursor={{ strokeDasharray: '3 3' }} />
			</ScatterChart>
		);
	}
}
export default WhiskeyTasteProfilePage;

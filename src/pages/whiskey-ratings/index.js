import React, { Component } from 'react';
import whiskies from '../../config/whiskey.json';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';
import './styles.css';

class WhiskeyRatingsPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: whiskies
		};
	}

	render() {
		return (
			<LineChart
				width={800}
				height={600}
				data={this.state.data}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
			>
				<XAxis dataKey="test-name" />
				<YAxis />
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Legend />
				<Line
					type="monotone"
					dataKey="rating_aroma"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>
				<Line type="monotone" dataKey="rating_taste" stroke="#82ca9d" />
				<Line type="monotone" dataKey="rating_finish" stroke="#823997" />
				<Line type="monotone" dataKey="rating_overall" stroke="#82b49d" />
			</LineChart>
		);
	}
}
export default WhiskeyRatingsPage;

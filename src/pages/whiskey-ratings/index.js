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
				width={1000}
				height={600}
				data={this.state.data}
				margin={{ top: 30, right: 0, left: 0, bottom: 30 }}
			>
				<XAxis dataKey="name" hide={true} />
				<YAxis hide={false} />
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Line
					type="monotone"
					dataKey="rating_aroma"
					stroke="#53111d"
					strokeWidth="2"
					activeDot={{ r: 10 }}
				/>
				<Line
					type="monotone"
					dataKey="rating_taste"
					stroke="#932d18"
					strokeWidth="2"
					activeDot={{ r: 6 }}
				/>
				<Line
					type="monotone"
					dataKey="rating_finish"
					stroke="#d9762b"
					strokeWidth="2"
					activeDot={{ r: 10 }}
				/>
				<Line
					type="monotone"
					dataKey="rating_overall"
					stroke="#a47963"
					strokeWidth="2"
					activeDot={{ r: 8 }}
				/>
				<Legend verticalAlign="bottom" />
			</LineChart>
		);
	}
}
export default WhiskeyRatingsPage;

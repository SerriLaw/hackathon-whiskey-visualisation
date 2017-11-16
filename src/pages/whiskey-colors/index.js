import React, { Component } from 'react';
import whiskies from '../../config/whiskey.json';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import './styles.css';

class WhiskeyColorsPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [
				{ name: 'Group A', value: 400, color: 'red' },
				{ name: 'Group B', value: 300, color: 'green' },
				{ name: 'Group C', value: 300, color: 'yellow' },
				{ name: 'Group D', value: 200, color: 'blue' }
			]
		};
	}

	render() {
		return (
			<PieChart width={800} height={600}>
				<Pie
					data={this.state.data}
					innerRadius={150}
					outerRadius={200}
					fill="#82ca9d"
				>
					{this.state.data.map((entry, index) => <Cell fill={entry.color} />)}
				</Pie>
				<Tooltip />
				<Legend />
			</PieChart>
		);
	}
}
export default WhiskeyColorsPage;
